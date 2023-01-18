import { socialLinks } from './data';
const SocialLinks = () => {
  return (
    <ul className='nav-icons'>
      {socialLinks.map((link) => {
        const { id, href, icon } = link;
        return (
          <li key={link.id}>
            <a
              id={id}
              href={href}
              target='_blank'
              rel='noreferrer'
              className='nav-icon'
            >
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default SocialLinks;
