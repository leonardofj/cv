import { contact } from "../data";

export default function Contacts() {
  return (
    <>
      <div className="d-md-flex justify-content-between align-items-center p-3 dark">
        {contact.map((item, index) => (
          <p key={index} className="mb-1 lh-1 yellow-text">
            {item.icon}
            {item.href && (
              <a
                className="yellow-text ms-2 link"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.text}
              </a>
            )}
            {!item.href && <span className="yellow ms-2">{item.text}</span>}
          </p>
        ))}
      </div>
    </>
  );
}
