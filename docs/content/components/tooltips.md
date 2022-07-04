---
layout: home
title: React Tooltip - Flowbite
description: Use the following Tailwind CSS powered tooltips to show extra content when hovering or focusing on an element
group: components
toc: true


previous: Toast
previousLink: components/toast/

next: Input Field
nextLink: forms/input-field/
---

Flowbite allows you to use the Tailwind CSS tooltip component to show extra information when hovering or focusing over an element in multiple positions, styles, and animations.

Before continuing, make sure that you have the <a href="{{< ref "getting-started/quickstart" >}}" rel="nofollow">Flowbite JavaScript file</a> included in your project in order to make the tooltip component work.

## Using tooltips

To get started with using tooltips all you need to do is add the `data-tooltip-target="{elementId}"` data attribute to an element where `elementId` is the id of the tooltip component. In the following example you can see the button that will trigger the `tooltip-default` element to be shown when hovered or focused.

{{< example class="dark:bg-gray-800" github="components/tooltips.md" show_dark=true >}}
<button data-tooltip-target="tooltip-default" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default tooltip</button>
<div id="tooltip-default" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
{{< /example >}}

## Tooltip styles

You can use choose between dark and light version styles for the tooltip component by changing the utility classes from Tailwind CSS and by applying the `data-tooltip-style="{light|dark}"` data attribute.

{{< example class="dark:bg-gray-800" github="components/tooltips.md" show_dark=true >}}
<!-- Light style tooltip -->
<button data-tooltip-target="tooltip-light" data-tooltip-style="light" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Light tooltip</button>
<div id="tooltip-light" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 tooltip">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>

<!-- Dark style tooltip -->
<button data-tooltip-target="tooltip-dark" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Dark tooltip</button>
<div id="tooltip-dark" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
{{< /example >}}

## Placement

The positioning of the tooltip element relative to the triggering element (eg. button, link) can be set using the `data-tooltip-placement="{top|right|bottom"left}"` data attribute.

{{< example class="dark:bg-gray-800" github="components/tooltips.md" show_dark=true >}}
<!-- Show tooltip on top -->
<button data-tooltip-target="tooltip-top" data-tooltip-placement="top" type="button" class="mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tooltip top</button>
<div id="tooltip-top" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Tooltip on top
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>

<!-- Show tooltip on right -->
<button data-tooltip-target="tooltip-right" data-tooltip-placement="right" type="button" class="mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tooltip right</button>
<div id="tooltip-right" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Tooltip on right
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>

<!-- Show tooltip on bottom -->
<button data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom" type="button" class="mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tooltip bottom</button>
<div id="tooltip-bottom" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Tooltip on bottom
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>

<!-- Show tooltip on left -->
<button data-tooltip-target="tooltip-left" data-tooltip-placement="left" type="button" class="mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tooltip left</button>
<div id="tooltip-left" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Tooltip on left
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
{{< /example >}}

## Triggering

You can choose the triggering event by using the `data-tooltip-trigger="{hover|click}"` data attributes to choose whether you want to show the tooltip when hovering or clicking on the element. By default this option is set to `hover`.

{{< example class="dark:bg-gray-800" github="components/tooltips.md" show_dark=true >}}
<!-- Show tooltip on hover -->
<button data-tooltip-target="tooltip-hover" data-tooltip-trigger="hover" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tooltip hover</button>
<div id="tooltip-hover" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>

<!-- Show tooltip on click -->
<button data-tooltip-target="tooltip-click" data-tooltip-trigger="click" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tooltip click</button>
<div id="tooltip-click" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
{{< /example >}}

## Animation

You can set tooltip animation styles by using the transition utility classes from Tailwind CSS. Make sure that you add `transition-opacity` and `duration-{x}` to set the animation duration.

{{< example class="dark:bg-gray-800" github="components/tooltips.md" show_dark=true >}}
<button data-tooltip-target="tooltip-animation" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Animated tooltip</button>
<div id="tooltip-animation" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
{{< /example >}}

## Disable arrow

You can also disable the tooltip arrow by not including the `data-popper-arrow` element.

{{< example class="dark:bg-gray-800" github="components/tooltips.md" show_dark=true >}}
<button data-tooltip-target="tooltip-no-arrow" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default tooltip</button>
<div id="tooltip-no-arrow" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Tooltip content
</div>
{{< /example >}}

## JavaScript behaviour

The **Tooltip** class from Flowbite can be used to create an object that will show a tooltip element relative to the main trigger element, such as a button, based on the parameters, options, and methods that you provide.

### Object parameters

Initialize a Tooltip object with the object parameters including the trigger element, the tooltip content element, and extra options to set the positioning and offsets of the tooltip.

<div class="overflow-x-auto relative my-10 shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="bg-gray-50 dark:bg-gray-700">
            <tr class="text-xs font-medium uppercase">
                <th scope="col" class="py-3 px-6">
                    Parameter
                </th>
                <th scope="col" class="py-3 px-6">
                    Type
                </th>
                <th scope="col" class="py-3 px-6">
                    Required
                </th>
                <th scope="col" class="py-3 px-6">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="py-4 px-6 font-medium">
                    <code class="text-blue-600 dark:text-blue-400">targetEl</code>
                </td>
                <td class="py-4 px-6">
                    Element
                </td>
                <td class="py-4 px-6">
                    Required
                </td>
                <td class="py-4 px-6">
                    Apply the tooltip content element to show and hide it either using the methods or the hover or click status of the trigger element.
                </td>
            </tr>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="py-4 px-6 font-medium">
                    <code class="text-blue-600 dark:text-blue-400">triggerEl</code>
                </td>
                <td class="py-4 px-6">
                    Element
                </td>
                <td class="py-4 px-6">
                    Required
                </td>
                <td class="py-4 px-6">
                    Set an element to trigger the tooltip when clicking or hovering (ie. a button, text).
                </td>
            </tr>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="py-4 px-6 font-medium">
                    <code class="text-blue-600 dark:text-blue-400">options</code>
                </td>
                <td class="py-4 px-6">
                    Object
                </td>
                <td class="py-4 px-6">
                    Optional
                </td>
                <td class="py-4 px-6">
                    Use the options parameter to set the positioning of the tooltip element, trigger type, offsets, and more.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Options

Use the following options as the third parameter for the Tooltip class to set the positioning, offset, and the trigger type (hover or click) for the tooltip element.

<div class="overflow-x-auto relative my-10 shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="bg-gray-50 dark:bg-gray-700">
            <tr class="text-xs font-medium uppercase">
                <th scope="col" class="py-3 px-6">
                    Option
                </th>
                <th scope="col" class="py-3 px-6">
                    Type
                </th>
                <th scope="col" class="py-3 px-6">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="py-4 px-6 font-medium">
                    <code class="text-blue-600 dark:text-blue-400">placement</code>
                </td>
                <td class="py-4 px-6 font-medium">
                    String
                </td>
                <td class="py-4 px-6">
                    Set the position of the tooltip element relative to the trigger element choosing from <code class="text-purple-600 dark:text-purple-400">top|right|bottom|left</code>.
                </td>
            </tr>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="py-4 px-6 font-medium">
                    <code class="text-blue-600 dark:text-blue-400">triggerType</code>
                </td>
                <td class="py-4 px-6 font-medium">
                    String
                </td>
                <td class="py-4 px-6">
                    Set the event type that will trigger the tooltip content choosing between <code class="text-purple-600 dark:text-purple-400">hover|click</code>.
                </td>
            </tr>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="py-4 px-6 font-medium">
                    <code class="text-blue-600 dark:text-blue-400">onHide</code>
                </td>
                <td class="py-4 px-6 font-medium">
                    Function
                </td>
                <td class="py-4 px-6">
                    Set a callback function when the tooltip is hidden.
                </td>
            </tr>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="py-4 px-6 font-medium">
                    <code class="text-blue-600 dark:text-blue-400">onShow</code>
                </td>
                <td class="py-4 px-6 font-medium">
                    Function
                </td>
                <td class="py-4 px-6">
                    Set a callback function when the tooltip is shown.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Methods

Use the methods from the Tooltip object to programatically show or hide the tooltip from JavaScript.

<div class="overflow-x-auto relative my-10 shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="bg-gray-50 dark:bg-gray-700">
            <tr class="text-xs font-medium uppercase">
                <th scope="col" class="py-3 px-6">
                    Method
                </th>
                <th scope="col" class="py-3 px-6">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="py-4 px-6 font-medium">
                    <code class="text-blue-600 dark:text-blue-400">show()</code>
                </td>
                <td class="py-4 px-6">
                    Use this method on the Tooltip object to show the tooltip content.
                </td>
            </tr>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="py-4 px-6 font-medium">
                    <code class="text-blue-600 dark:text-blue-400">hide()</code>
                </td>
                <td class="py-4 px-6">
                    Use this method on the Tooltip object to hide the tooltip content.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Example

Check out the following JavaScript example to learn how to initialize, set the options, and use the methods for the Tooltip object.

First of all, set the target element as the tooltip itself and the trigger element which can be a button or text element.

After that you can also set the options object to change the placement and trigger type of the tooltip, alongside with the callback functions.

```javascript
// set the tooltip content element
const targetEl = document.getElementById('tooltipContent');

// set the element that trigger the tooltip using hover or click
const triggerEl = document.getElementById('tooltipButton');

// options with default values
const options = {
  placement: 'bottom',
  triggerType: 'hover',
  onHide: () => {
      console.log('tooltip is shown');
  },
  onShow: () => {
      console.log('tooltip is hidden');
  }
};
```

Create a new Tooltip object based on the options above.

```javascript
/*
* targetEl: required
* triggerEl: required
* options: optional
*/
const tooltip = new Tooltip(targetEl, triggerEl, options);
```

Use the `show` and `hide` methods on the Tooltip object to programatically show and hide the tooltip element using JavaScript.

```javascript
// show the tooltip
tooltip.show();

// hide the tooltip
tooltip.hide();
```

### HTML Markup

Use the following HTML code for the JavaScript example above.

```html
<button id="tooltipButton" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default tooltip</button>
<div id="tooltipContent" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
```