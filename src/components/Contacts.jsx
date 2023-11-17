import { contact } from "../data";

export default function Contacts() {
  return (
    <>
      <div className="d-md-flex justify-content-between align-items-center p-3 dark">
        {contact.map((item) => (
          <p className="mb-1 lh-1 yellow">
            {item.icon}
            {item.href ? (
              <a
                className="yellow ms-2 text-decoration-none"
                href={item.href}
                target="_blank"
              >
                {item.text}
              </a>
            ) : (
              <span className="yellow ms-2">{item.text}</span>
            )}
          </p>
        ))}
      </div>
    </>
  );
}
