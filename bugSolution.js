```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only when the component mounts and unmounts
    console.log('Count changed:', count);
    return () => {
      // Cleanup function (optional): called when component unmounts or effect is replaced
    };
  }, []); // Empty array: runs only once on mount

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```