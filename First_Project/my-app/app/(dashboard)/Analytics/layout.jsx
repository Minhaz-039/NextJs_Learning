export default function Dashboard_Layout({ children }) {
  return (
    <>
      <nav className="p-4 flex m-2 justify-around">
        <button className="p-4 m-2">Avatar</button>
        <button className="p-4 m-2">Personal Info</button>
        <button className="p-4 m-2">Contact Info</button>
      </nav>
      {children}
    </>
  );
}
