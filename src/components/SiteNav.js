import { Link, useLocation, useNavigate } from "react-router-dom";

export const NAV_ITEMS = [
  { type: "section", id: "education", label: "Education" },
  { type: "section", id: "publications", label: "Publications" },
  { type: "section", id: "experiences", label: "Experiences" },
  { type: "section", id: "certifications", label: "Certifications" },
  { type: "section", id: "projects", label: "Projects" },
  { type: "route", to: "/blogs", label: "Blogs" },
  { type: "section", id: "about", label: "About" },
  { type: "section", id: "contact", label: "Contact" },
];

export function useGoToSection() {
  const navigate = useNavigate();
  const location = useLocation();

  return (id) => {
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    navigate(`/#${id}`);
  };
}

const SiteNav = ({ onNavigate }) => {
  const goToSection = useGoToSection();

  return (
    <ul>
      {NAV_ITEMS.map((item) => (
        <li key={item.label}>
          {item.type === "route" ? (
            <Link to={item.to} onClick={() => onNavigate?.()}>
              {item.label}
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => {
                onNavigate?.();
                goToSection(item.id);
              }}
            >
              {item.label}
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SiteNav;
