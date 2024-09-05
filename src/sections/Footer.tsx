export default function Footer() {
  return (
    <footer className="footer footer-center text-sm p-12">
      <aside>
        <p>© {new Date().getFullYear()} Bryan Dang</p>
        <p>Made with React and Tailwind</p>
      </aside>
    </footer>
  )
}