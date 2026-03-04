import React, { useState, FormEvent } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { ScrollReveal } from '../../components';
import { useLanguage } from '../../i18n/LanguageContext';
import {
  ContactSection,
  ContactContainer,
  ContactInfo,
  SectionTitle,
  ContactDescription,
  ContactMethods,
  ContactMethod,
  ContactIcon,
  ContactDetails,
  ContactLabel,
  ContactValue,
  ContactForm,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitButton,
  SocialLinks,
  SocialLink,
} from './Contact.styles';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(t.contact.form.submit);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ContactSection id="contato">
      <ContactContainer>
        <ScrollReveal animation="fadeInLeft">
          <ContactInfo>
            <SectionTitle>{t.contact.title}</SectionTitle>
            <ContactDescription>{t.contact.subtitle}</ContactDescription>
            <ContactMethods>
              <ContactMethod>
              <ContactIcon>{React.createElement(FaEnvelope as any, { style: { color: '#fff' } })}</ContactIcon>
              <ContactDetails>
                <ContactLabel>{t.contact.email}</ContactLabel>
                <ContactValue href="mailto:bofe.ronaldo18@gmail.com">
                  bofe.ronaldo18@gmail.com
                </ContactValue>
              </ContactDetails>
            </ContactMethod>
            <ContactMethod>
              <ContactIcon>{React.createElement(FaPhone as any, { style: { color: '#fff' } })}</ContactIcon>
              <ContactDetails>
                <ContactLabel>{t.contact.phone}</ContactLabel>
                <ContactValue href="tel:+5511941756013">
                  +55 (11) 94175-6013
                </ContactValue>
              </ContactDetails>
            </ContactMethod>
            <ContactMethod>
              <ContactIcon>{React.createElement(FaMapMarkerAlt as any, { style: { color: '#fff' } })}</ContactIcon>
              <ContactDetails>
                <ContactLabel>Localização</ContactLabel>
                <ContactValue as="span">São Paulo, Brasil</ContactValue>
              </ContactDetails>
            </ContactMethod>
          </ContactMethods>
          <SocialLinks>
            <SocialLink
              href="https://github.com/ronaldozx"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              {React.createElement(FaGithub as any, { style: { color: '#fff' } })}
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/ronaldo-c%C3%A9sar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              {React.createElement(FaLinkedin as any, { style: { color: '#fff' } })}
            </SocialLink>
          </SocialLinks>
        </ContactInfo>
        </ScrollReveal>
        <ScrollReveal animation="fadeInRight" delay={0.2}>
          <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel htmlFor="name">{t.contact.form.nameLabel}</FormLabel>
            <FormInput
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t.contact.form.namePlaceholder}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="email">{t.contact.form.emailLabel}</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.contact.form.emailPlaceholder}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="message">{t.contact.form.messageLabel}</FormLabel>
            <FormTextarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t.contact.form.messagePlaceholder}
              required
            />
          </FormGroup>
          <SubmitButton type="submit">
            {t.contact.form.submit}
          </SubmitButton>
        </ContactForm>
        </ScrollReveal>
      </ContactContainer>
    </ContactSection>
  );
};
