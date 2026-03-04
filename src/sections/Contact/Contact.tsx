import React, { useState, FormEvent } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { ScrollReveal } from '../../components';
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
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
            <SectionTitle>Entre em Contato</SectionTitle>
            <ContactDescription>
              Estou sempre aberto a novas oportunidades e colaborações. Vamos
              conversar sobre seu próximo projeto!
            </ContactDescription>
            <ContactMethods>
              <ContactMethod>
              <ContactIcon>{React.createElement(FaEnvelope as any, { style: { color: '#fff' } })}</ContactIcon>
              <ContactDetails>
                <ContactLabel>Email</ContactLabel>
                <ContactValue href="mailto:bofe.ronaldo18@gmail.com">
                  bofe.ronaldo18@gmail.com
                </ContactValue>
              </ContactDetails>
            </ContactMethod>
            <ContactMethod>
              <ContactIcon>{React.createElement(FaPhone as any, { style: { color: '#fff' } })}</ContactIcon>
              <ContactDetails>
                <ContactLabel>Telefone</ContactLabel>
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
              href="https://github.com/seuusuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              {React.createElement(FaGithub as any, { style: { color: '#fff' } })}
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/seuusuario"
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
            <FormLabel htmlFor="name">Nome</FormLabel>
            <FormInput
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome completo"
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu@email.com"
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="message">Mensagem</FormLabel>
            <FormTextarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Conte-me sobre seu projeto..."
              required
            />
          </FormGroup>
          <SubmitButton type="submit">
            Enviar Mensagem
          </SubmitButton>
        </ContactForm>
        </ScrollReveal>
      </ContactContainer>
    </ContactSection>
  );
};
