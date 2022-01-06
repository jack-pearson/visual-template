/*
 * @Author: your name
 * @Date: 2021-07-16 10:49:38
 * @LastEditTime: 2022-01-06 16:03:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const colorKeywords = "./color";

const hexReg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
const rgbReg = /^(rgb|rgba|RGB|RGBA)/;
const rgbaReg = /^(rgba|RGBA)/;

export function randomExtend(minNum: number, maxNum: number) {
  if (arguments.length === 1) {
    return parseInt(Math.random() * minNum + 1, 10);
  } else {
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
  }
}

export function debounce(
  delay: number | undefined,
  callback: { apply: (arg0: any, arg1: IArguments) => void }
) {
  let lastTime: number | undefined;

  return function () {
    clearTimeout(lastTime);

    const [that, args] = [this, arguments];

    lastTime = setTimeout(() => {
      callback.apply(that, args);
    }, delay);
  };
}

export function observerDomResize(dom: Node, callback: MutationCallback) {
  const MutationObserver =
    window.MutationObserver ||
    window.WebKitMutationObserver ||
    window.MozMutationObserver;

  const observer = new MutationObserver(callback);

  observer.observe(dom, {
    attributes: true,
    attributeFilter: ["style"],
    attributeOldValue: true,
  });

  return observer;
}

export function getPointDistance(pointOne: number[], pointTwo: number[]) {
  const minusX = Math.abs(pointOne[0] - pointTwo[0]);

  const minusY = Math.abs(pointOne[1] - pointTwo[1]);

  return Math.sqrt(minusX * minusX + minusY * minusY);
}

export function uuid(hasHyphen: any) {
  return (
    hasHyphen
      ? "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
      : "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx"
  ).replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function deepMerge(
  target: { [x: string]: any },
  merged: { [x: string]: any }
) {
  for (var key in merged) {
    if (target[key] && typeof target[key] === "object") {
      deepMerge(target[key], merged[key]);
      continue;
    }
    if (typeof merged[key] === "object") {
      target[key] = deepClone(merged[key], true);
      continue;
    }
    target[key] = merged[key];
  }
  return target;
}

export function deepClone(
  object: { [x: string]: any; hasOwnProperty: (arg0: string) => any },
  recursion = false
) {
  if (!object) return object;

  const { parse, stringify } = JSON;

  if (!recursion) return parse(stringify(object));

  const clonedObj = object instanceof Array ? [] : ({} as any);

  if (object && typeof object === "object") {
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        if (object[key] && typeof object[key] === "object") {
          clonedObj[key] = deepClone(object[key], true);
        } else {
          clonedObj[key] = object[key];
        }
      }
    }
  }

  return clonedObj;
}

export function fade(color: any, percent = 100) {
  if (!color) {
    console.error("fade: Missing parameters!");

    return false;
  }

  const rgbValue = getRgbValue(color);

  if (!rgbValue) return false;

  const rgbaValue = [...rgbValue, percent / 100];

  return getColorFromRgbValue(rgbaValue);
}

export function getRgbValue(color: string) {
  if (!color) {
    console.error("getRgbValue: Missing parameters!");

    return false;
  }

  color = validator(color);

  if (!color) return false;

  const isHex = hexReg.test(color);
  const isRgb = rgbReg.test(color);

  const lowerColor = color.toLowerCase();

  if (isHex) return getRgbValueFromHex(lowerColor);
  if (isRgb) return getRgbValueFromRgb(lowerColor);
}

function validator(color: string) {
  let isHex = hexReg.test(color);
  let isRgb = rgbReg.test(color);

  if (isHex || isRgb) return color;

  color = getColorByKeyword(color);

  if (!color) {
    console.error("Color: Invalid color!");

    return false;
  }

  return color;
}

function getColorByKeyword(keyword: any) {
  if (!keyword) {
    console.error("getColorByKeywords: Missing parameters!");

    return false;
  }

  if (!colorKeywords.has(keyword)) return false;

  return colorKeywords.get(keyword);
}

export function getColorFromRgbValue(value: any[]) {
  if (!value) {
    console.error("getColorFromRgbValue: Missing parameters!");

    return false;
  }

  const valueLength = value.length;

  if (valueLength !== 3 && valueLength !== 4) {
    console.error("getColorFromRgbValue: Value is illegal!");

    return false;
  }

  let color = valueLength === 3 ? "rgb(" : "rgba(";

  color += value.join(",") + ")";

  return color;
}

function getRgbValueFromHex(
  color: string | Iterable<unknown> | ArrayLike<unknown>
) {
  color = color.replace("#", "");

  if (color.length === 3)
    color = Array.from(color)
      .map(hexNum => hexNum + hexNum)
      .join("");

  color = color.split("");

  return new Array(3)
    .fill(0)
    .map((t, i) => parseInt(`0x${color[i * 2]}${color[i * 2 + 1]}`));
}

function getRgbValueFromRgb(color: string) {
  return color
    .replace(/rgb\(|rgba\(|\)/g, "")
    .split(",")
    .slice(0, 3)
    .map((n: string) => parseInt(n));
}

export function getPolylineLength(points: string | any[]) {
  const lineSegments = new Array(points.length - 1)
    .fill(0)
    .map((foo, i) => [points[i], points[i + 1]]);

  const lengths = lineSegments.map(item => getTwoPointDistance(...item));

  return mulAdd(lengths);
}

export function getTwoPointDistance(
  pointOne: number[],
  pointTwo: number[] | undefined
) {
  const minusX = Math.abs(pointOne[0] - pointTwo[0]);

  const minusY = Math.abs(pointOne[1] - pointTwo[1]);

  return Math.sqrt(minusX * minusX + minusY * minusY);
}

export function mulAdd(nums: any[]) {
  nums = filterNonNumber(nums);

  return nums.reduce((all: any, num: any) => all + num, 0);
}

export function filterNonNumber(array: any[]) {
  return array.filter((n: any) => typeof n === "number");
}
