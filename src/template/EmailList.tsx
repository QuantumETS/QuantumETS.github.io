import { useState } from 'react';

import { Section } from '../layout/Section';

const EmailList = () => {
  const [text, setText] = useState('');

  return (
    <Section
      title="Vous voulez rester à jour avec les évènements et formations?"
      subtitle="EmailList"
      description="Entrez votre email dans la section ci-dessous et vous serez tenus au courant de nos évènements et formations."
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: '10px',
          }}
        >
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Entrer votre courriel"
            style={{
              width: '300px',
              padding: '10px',
              fontSize: '16px',
              marginRight: '10px',
              border: '1px solid black', // Black border
            }}
          />
          <button
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#007BFF', // Solid background color
              color: '#FFFFFF', // Text color
              border: 'none', // Remove border
              borderRadius: '4px', // Optional: rounded corners
              cursor: 'pointer', // Pointer cursor on hover
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </Section>
  );
};

export { EmailList };
