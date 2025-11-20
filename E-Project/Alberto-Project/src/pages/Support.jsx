import { useState } from 'react';
import '../styles/Support.css';

export default function Support() {
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    { service: 'Full Service (Mechanical)', price: '$250–$800', description: 'Complete disassembly, cleaning, and reassembly' },
    { service: 'Quartz Movement Replacement', price: '$150', description: 'Replace quartz movement with new battery' },
    { service: 'Crystal Replacement', price: '$80–$300', description: 'Replace damaged crystal (sapphire or mineral)' },
    { service: 'Authenticity Appraisal', price: '$100', description: 'Professional authentication with certificate' },
    { service: 'Band Adjustment', price: 'Complimentary', description: 'Free sizing for all watch bands' },
    { service: 'Polishing & Cleaning', price: '$50–$150', description: 'Professional polishing and deep cleaning' },
    { service: 'Battery Replacement', price: 'Free (1 year)', description: 'Free battery replacement within warranty' },
    { service: 'Water Resistance Testing', price: '$75', description: 'Pressure testing and seal replacement' }
  ];

  const faqs = [
    {
      question: 'How do I authenticate my Rolex?',
      answer: 'Visit any Alberto store with your watch, serial number, and any original papers. We provide free initial inspection and can issue a professional authentication certificate for $100. Our certified watchmakers have decades of experience identifying authentic timepieces.'
    },
    {
      question: 'Do you buy pre-owned watches?',
      answer: 'Yes! We offer competitive trade-in and cash offers for luxury brands in good condition. We accept Rolex, Omega, Patek Philippe, Audemars Piguet, and other premium brands. Bring your watch for a free appraisal during store hours.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 14-day return policy on all new watches in original condition with tags and packaging. Pre-owned watches are sold as-is with a 7-day inspection period. All returns must include original receipt and packaging.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship worldwide. Shipping costs and delivery times vary by location. We use insured, tracked shipping for all international orders. Customs fees are the responsibility of the buyer.'
    },
    {
      question: 'How long does a full service take?',
      answer: 'A complete mechanical service typically takes 4-6 weeks. This includes disassembly, cleaning, replacement of worn parts, reassembly, and testing. Rush service is available for an additional fee (2-3 weeks).'
    },
    {
      question: 'What warranty do you offer?',
      answer: 'All new watches come with a 2-year international warranty covering manufacturing defects. Pre-owned watches include a 1-year warranty on our service work. Warranty does not cover damage from accidents, water damage, or normal wear.'
    },
    {
      question: 'Can you repair vintage watches?',
      answer: 'Absolutely! Our master watchmakers specialize in vintage timepiece restoration. We can source rare parts, restore dials, and rebuild movements. Restoration timelines vary based on complexity and part availability.'
    },
    {
      question: 'Do you offer watch insurance?',
      answer: 'We partner with leading insurance providers to offer comprehensive watch insurance. Coverage includes theft, loss, and damage. Contact us for a personalized quote based on your timepiece value.'
    }
  ];

  return (
    <div className="support-page">
      <div className="support-container">
        <div className="support-header">
          <h1 className="support-title">Customer Support</h1>
          <p className="support-intro">
            We're here to help you with all your watch needs. From repairs and maintenance 
            to authentication and insurance, our expert team is ready to assist you.
          </p>
        </div>

        <div className="support-grid">
          <div className="support-section warranty-section">
            <div className="section-icon">🛡️</div>
            <h2 className="section-title">Warranty & Repairs</h2>
            <p className="section-description">
              All watches come with a <strong>2-year international warranty</strong>. 
              Bring your watch and proof of purchase to any Alberto store for free inspection.
            </p>
            <ul className="warranty-list">
              <li>
                <span className="check-icon">✓</span>
                Battery replacement: Free within 1 year
              </li>
              <li>
                <span className="check-icon">✓</span>
                Band adjustment: Complimentary
              </li>
              <li>
                <span className="check-icon">✓</span>
                Polishing & cleaning: $50–$150
              </li>
              <li>
                <span className="check-icon">✓</span>
                Free inspection at all locations
              </li>
            </ul>
          </div>

          <div className="support-section services-section">
            <div className="section-icon">⚙️</div>
            <h2 className="section-title">Service Price List</h2>
            <div className="services-table-wrapper">
              <table className="services-table">
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <strong>{item.service}</strong>
                        <span className="service-desc">{item.description}</span>
                      </td>
                      <td className="price-cell">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="faq-section">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${openFaq === index ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="faq-question">
                  <span>{faq.question}</span>
                  <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
                </div>
                {openFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="support-footer">
          <div className="contact-box">
            <h3>Need Immediate Help?</h3>
            <div className="contact-methods">
              <div className="contact-method">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p><a href="tel:+15551234567">+1 (555) 123-4567</a></p>
                </div>
              </div>
              <div className="contact-method">
                <span className="contact-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <p><a href="mailto:support@albertowatches.com">support@albertowatches.com</a></p>
                </div>
              </div>
              <div className="contact-method">
                <span className="contact-icon">💬</span>
                <div>
                  <strong>Live Chat</strong>
                  <p>Available Mon–Sat: 9AM–8PM EST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
