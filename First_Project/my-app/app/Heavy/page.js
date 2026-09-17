async function Heavy() {
  // Stand-in for a real data fetch — the await is what suspends,
  // which is what makes loading.js show.
  await new Promise((r) => setTimeout(r, 3000));

  return (
    <div>
      <h1 className="m-2 font-extrabold text-6xl">Heavy Component</h1>
      <p className="m-2 text-2xl">
        This is a heavy component that takes time to load.
      </p>
    </div>
  );
}

export default Heavy;
