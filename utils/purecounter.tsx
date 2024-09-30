// This function creates the configuration with default values and merges provided configuration.
function setOptions(config: any, baseConfig: any = {}) {
  // Create a new configuration object.
  const newConfig: any = {};

  // Loop config items to set it value into the configuration.
  for (const key in config) {
    // If base config is set, only accept the base config property.
    if (!Object.prototype.hasOwnProperty.call(baseConfig, key)) continue;
    // Parse the config value.
    const val = parseValue(config[key]);
    // Set the new configuration property value.
    newConfig[key] = val;
    // Exclusive for 'duration' or 'pulse' property, recheck the value.
    // If it's not a boolean, just set it to milisecond unit.
    if (key.match(/duration|pulse/)) {
      newConfig[key] = typeof val === "number" ? val * 1000 : val;
    }
  }

  // Finally, we can just merge the base config (if any), with the new config.
  return Object.assign({}, baseConfig, newConfig);
}

// This is the counter method to do its job.
function startCounter(element: HTMLElement, config: any) {
  // First, get the increments step.
  let incrementsPerStep =
    (config.end - config.start) / (config.duration / config.delay);
  // Next, set the counter mode (Increment or Decrement).
  let countMode = "inc";

  // Set mode to 'decrement' and 'increment step' to minus if start is larger than end.
  if (config.start > config.end) {
    countMode = "dec";
    incrementsPerStep *= -1;
  }

  // Next, determine the starting value.
  let currentCount = parseInt(`${parseValue(config.start)}`, 10);
  // And then print its value to the page.
  element.innerHTML = formatNumber(currentCount, config);

  // If the config 'once' is true, then set the 'duration' to 0.
  if (config.once === true) {
    element.setAttribute("data-purecounter-duration", "0");
  }

  // Now start counting with counterWorker using the interval method based on delay.
  const counterWorker = setInterval(() => {
    // First determine the next value base on current value, increment value, and count mode.
    const nextNum = nextNumber(currentCount, incrementsPerStep, countMode);
    // Next, print that value to the page.
    element.innerHTML = formatNumber(nextNum, config);
    // Now set that value to the current value, because it's already printed.
    currentCount = nextNum;

    // If the value is larger or less than the 'end' (based on mode), then print the end value and stop the interval.
    if (
      (currentCount >= config.end && countMode == "inc") ||
      (currentCount <= config.end && countMode == "dec")
    ) {
      element.innerHTML = formatNumber(config.end, config);
      // If 'pulse' is set ignore the 'once' config.
      if (config.pulse) {
        // First set the 'duration' to zero.
        element.setAttribute("data-purecounter-duration", "0");
        // Next use timeout to reset it duration back based on 'pulse' config.
        setTimeout(() => {
          element.setAttribute(
            "data-purecounter-duration",
            `${config.duration / 1000}`,
          );
        }, config.pulse);
      }
      clearInterval(counterWorker);
    }
  }, config.delay);
}

// This function is to get the next number in the counting order.
function nextNumber(number: number, steps: number, mode = "inc") {
  // First get the exact value from the number and step (int or float).
  number = parseInt(`${parseValue("" + number)}`);
  steps = parseInt(`${parseValue("" + steps)}`);

  // Last get the next number based on current number, increment step, and count mode.
  return parseFloat(mode === "inc" ? `${number + steps}` : `${number - steps}`);
}

// This function is to convert number into currency format.
function convertNumber(number: number, config: any) {
  // Use the converter if 'filesizing' or 'currency' is on.
  if (config.filesizing || config.currency) {
    number = Math.abs(Number(number)); // Get the absolute value of number.

    let baseNumber = 1000; // Base multiplying threshold.
    const symbol =
      config.currency && typeof config.currency === "string"
        ? config.currency
        : ""; // Set the currency symbol (if any).
    const limit = config.decimals || 1; // Set the decimal limit (default is 1).
    let unit = ["", "K", "M", "B", "T"]; // Number unit based exponent threshold.
    let value = "";

    // Changes base number and its unit for filesizing.
    if (config.filesizing) {
      baseNumber = 1024; // Use 1024 instead of 1000.
      unit = ["bytes", "KB", "MB", "GB", "TB"]; // Change to 'bytes' unit.
    }

    // Set the value based on the threshold.
    for (let i = 4; i >= 0; i--) {
      // If the exponent is 0.
      if (i === 0) value = `${number.toFixed(limit)} ${unit[i]}`;
      // If the exponent is above zero.
      if (number >= getFilesizeThreshold(baseNumber, i)) {
        value = `${(number / getFilesizeThreshold(baseNumber, i)).toFixed(
          limit,
        )} ${unit[i]}`;
        break;
      }
    }

    // Apply the symbol before the value and return it as string.
    return symbol + value;
  } else {
    // Return its value as float if not using filesizing or currency.
    return `${parseFloat("" + number)}`;
  }
}

// This function will get the given filesize base.
function getFilesizeThreshold(baseNumber: number, index: number) {
  return Math.pow(baseNumber, index);
}

// This function is to get the last formated number.
function applySeparator(value: string, config: any) {
  // Get replaced value based on its separator/symbol.
  function replacedValue(val: string, separator: string) {
    // Regex to determine the seperator configuration of the number.
    const separatorRegExp =
      /^(?:(\d{1,3},(?:\d{1,3},?)*)|(\d{1,3}\.(?:\d{1,3}\.?)*)|(\d{1,3}(?:\s\d{1,3})*))([.,]?\d{0,2}?)$/gi;

    return val.replace(separatorRegExp, function (match, g1, g2, g3, g4) {
      let result = "",
        sep = "";
      if (g1 !== undefined) {
        // The number's format is using a comma as the thousand separator, and a period as the decimal separator.
        result = g1.replace(new RegExp(/,/gi, "gi"), separator);
        sep = ",";
      } else if (g2 !== undefined) {
        // The number's format is using a period as the thousand separator, and a comma as the decimal separator.
        result = g2.replace(new RegExp(/\./gi, "gi"), separator);
      } else if (g3 !== undefined) {
        // The number's format is using a space as the thousand separator, and a comma as the decimal separator.
        result = g3.replace(new RegExp(/ /gi, "gi"), separator);
      }
      if (g4 !== undefined) {
        const decimal = sep !== "," ? (separator !== "," ? "," : ".") : ".";
        result +=
          g4 !== undefined
            ? g4.replace(new RegExp(/\.|,/gi, "gi"), decimal)
            : "";
      }

      return result;
    });
  }

  // If the config formater is not false, then apply the separator.
  if (config.formater) {
    // Now get the separator symbol.
    const symbol = config.separator // If config separator is set.
      ? typeof config.separator === "string"
        ? config.separator // If its type is a string, then apply its value.
        : "," // If it's not string (boolean), then apply comma (as a default separator).
      : "";
    // Special exception when locale is not 'en-US' but separator value is 'true' (use it's default locale thausands separator).
    if (config.formater !== "en-US" && config.separator === true) {
      return value;
    }
    // Return the replaced value based on its symbol.
    return replacedValue(value, symbol);
  }
  // If config formater is false, then return its default value.
  return value;
}

// This function is to get formated number to be printed in the page.
function formatNumber(number: number, config: any) {
  // This is the configuration for the 'toLocaleString' method.
  const strConfig = {
    minimumFractionDigits: config.decimals,
    maximumFractionDigits: config.decimals,
  };
  // Get the locale from config formater.
  const locale =
    typeof config.formater === "string" ? config.formater : undefined;

  // Set and convert the number based on its config.
  let numberStr = convertNumber(number, config);

  // Now format the number to string based on its locale.
  numberStr = config.formater
    ? number.toLocaleString(locale, strConfig)
    : parseInt(numberStr).toString();

  // Apply the number separator using the number as a string.
  return applySeparator(numberStr, config);
}

// Parse the value with the correct data type.
function parseValue(data: string) {
  // If the value is a number with dot (.) -> it will be parsed as a float.
  if (/^[0-9]+\.[0-9]+$/.test(data)) {
    return parseFloat(data);
  }
  // If it's just a plain number, it will be parsed as integer.
  if (/^[0-9]+$/.test(data)) {
    return parseInt(data);
  }
  // If it's a boolean or a string, it will be parsed as boolean.
  if (/^true|false/i.test(data)) {
    return /^true/i.test(data);
  }
  // Just return the data, no need for ensuring the data type.
  return data;
}

// This function is to detect the element is in view or not.
function elementIsInView(element: HTMLElement) {
  let top = element.offsetTop;
  let left = element.offsetLeft;
  const width = element.offsetWidth;
  const height = element.offsetHeight;

  while (element.offsetParent) {
    element = element.offsetParent as HTMLElement;
    top += element.offsetTop;
    left += element.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    top + height <= window.pageYOffset + window.innerHeight &&
    left + width <= window.pageXOffset + window.innerWidth
  );
}

// Check if the browser supports the Intersection Observer.
function intersectionListenerSupported() {
  return (
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype
  );
}

// Initialize PureCounter.
export default class PureCounter {
  configs = {
    start: 0, // Starting number [uint]
    end: 100, // End number [uint]
    duration: 2000, // Count duration [milisecond]
    delay: 10, // Count delay [milisecond]
    once: true, // Counting at once or recount when scroll [boolean]
    pulse: false, // Pulse count for certain time [boolean|milisecond]
    decimals: 0, // Decimal places [uint]
    legacy: true, // If this is true it will use the scroll event listener on browsers
    filesizing: false, // Enable filesizing counting [boolean]
    currency: false, // Is it for currency? Use it for set the symbol too [boolean|char|string]
    separator: false, // Do you want to use thausands separator? use it for set the symbol too [boolean|char|string]
    formater: "us-US", // Number toLocaleString locale/formater, by default is "en-US" [string|boolean:false]
    selector: ".purecounter", // HTML query selector for spesific element
  };
  configOptions: any;

  constructor(options = {}) {
    this.configOptions = setOptions(options, this.configs);
  }

  registerEventListeners() {
    // Get all elements with the selector class (default: 'purecounter')
    const elements = Array.from(
      document.querySelectorAll(this.configOptions.selector),
    );
    // Abort if there is no found elements.
    if (elements.length === 0) {
      return;
    }

    // Run animate elements based on Intersection Support
    if (intersectionListenerSupported()) {
      const intersectObserver = new IntersectionObserver(
        this.animateElements.bind(this),
        {
          root: null,
          rootMargin: "20px",
          threshold: 0.5,
        },
      );

      elements.forEach((element) => {
        intersectObserver.observe(element);
      });
    } else {
      if (window.addEventListener) {
        this.animateLegacy(elements);
        window.addEventListener(
          "scroll",
          () => {
            this.animateLegacy(elements);
          },
          { passive: true },
        );
      }
    }
  }

  // Run animations for legacy browsers.
  animateLegacy(elements: HTMLElement[]) {
    elements.forEach((element: HTMLElement) => {
      const config = this.parseConfig(element);
      if (config.legacy === true && elementIsInView(element)) {
        this.animateElements([element]);
      }
    });
  }

  // Run animations for modern browsers.
  animateElements(elements: any[], observer?: any) {
    elements.forEach((element: any) => {
      const elm = element.target || element; // Just make sure which element will be used
      const elementConfig = this.parseConfig(elm); // Get config value on that element

      // If duration is less than or equal zero, just format the 'end' value
      if (elementConfig.duration <= 0) {
        return (elm.innerHTML = formatNumber(elementConfig.end, elementConfig));
      }

      if (
        (!observer && !elementIsInView(element)) ||
        (observer && element.intersectionRatio < 0.5)
      ) {
        const value =
          elementConfig.start > elementConfig.end
            ? elementConfig.end
            : elementConfig.start;
        return (elm.innerHTML = formatNumber(value, elementConfig));
      }

      // If duration is more than 0, then start the counter
      setTimeout(() => {
        return startCounter(elm, elementConfig);
      }, elementConfig.delay);
    });
  }

  // This function is to generate the element config.
  parseConfig(element: HTMLElement) {
    // First, we need to declare the base Config
    // This config will be used if the element doesn't have config
    const baseConfig = this.configOptions;

    // Next, get all 'data-precounter-*' attributes value. Store to array
    const configValues = [].filter.call(element.attributes, (attr: any) => {
      return /^data-purecounter-/.test(attr.name);
    });

    // Now, we create element config as an object
    const elementConfig =
      configValues.length != 0
        ? Object.assign(
            {},
            ...configValues.map(({ name, value }: any) => {
              const key = name.replace("data-purecounter-", "").toLowerCase(),
                val = parseValue(value);

              return { [key]: val };
            }),
          )
        : {};

    // Last setOptions and return
    return setOptions(elementConfig, baseConfig);
  }
}
