import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
const footerLinks = [
  {
    title: 'Gmail',
    href: 'https://www.youtube.com/@AbrahamRamirezSierra',
  },
  {
    title: 'Resume',
    href: 'https://plum-viviana-14.tiiny.site',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/captianabe/',
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/abrahamram',
  },

];
export const Footer = () => {
  return(

      <footer className="relative z-10 overflow-x-clip pointer-events-auto">
        <div
            className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-yellow-300/30
  [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 pointer-events-none"
        ></div>


        <div className="container">
          <div className="border-t border-white/15 py-6 text-sm
    flex flex-col md:flex-row md:justify-between items-center gap-8">
            <div className="text-white/40">&copy; 2025. All Rights Reserved</div>

            <nav className="flex flex-col md:flex-row items-center gap-8">
              {footerLinks.map(link => (
                  <a
                      key={link.title}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-white/80 hover:text-sky-300 transition-colors duration-200 group"
                  >
                    <span className="font-bold">{link.title}</span>
                    <ArrowUpRightIcon className="size-5 group-hover:animate-bounce" />
                  </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>


  );
};
