# React useEffect Infinite Loop Bug
This repository demonstrates a common bug in React applications involving the `useEffect` hook.  The bug causes an infinite loop due to an incorrectly specified dependency array.

## Bug Description
The `useEffect` hook is used to perform side effects after rendering. However, if the dependency array is missing or incorrect, the effect may run repeatedly, leading to an infinite loop and performance issues. In this case, the component renders repeatedly because the console log in the useEffect is triggering a re-render, making the dependency array incomplete.

## How to Reproduce
Clone this repository and run `npm install`. Then run `npm start` to launch the application. Observe the continuous logging to the console and the rapid updates to the counter display.

## Solution
The provided solution includes a correctly specified dependency array in the `useEffect` hook, resolving the infinite loop.