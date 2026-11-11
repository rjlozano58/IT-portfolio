import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { footerData } from '../data/footerData';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-background/95 px-4 pb-11 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl">
        <Separator className="mb-8" />
        <h3 className="mb-4 text-lg font-semibold text-center md:text-left">Let's Connect</h3>
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row md:text-left">
          <div className="flex gap-4">
            {footerData.socialLinks.map((link) => (
              <Button key={link.name} variant="outline" size="icon" className="rounded-full" asChild>
                <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  {link.icon === 'Github' && <Github className="h-5 w-5" />}
                  {link.icon === 'Linkedin' && <Linkedin className="h-5 w-5" />}
                  {link.icon === 'Mail' && <Mail className="h-5 w-5" />}
                </a>
              </Button>
            ))}
          </div>
          <p>
            <i>{footerData.quote}</i>
          </p>
          <Button variant="outline" className="gap-2 font-semibold" asChild>
            <a href={footerData.resumeLink} download="RogelioLozano_Resume.pdf">
              <Download className="h-4 w-4" />
              Download My Resume
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;