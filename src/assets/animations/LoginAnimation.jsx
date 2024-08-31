import React, { useEffect } from 'react';

const LoginAnimation = () => {
  useEffect(() => {
    // Dotlottie player modülünü ekliyoruz
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
    script.type = 'module';
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <dotlottie-player 
        src="https://lottie.host/3ce9a7cc-d315-4136-bc8a-722d041fd824/pm2KIoL26B.json"
        background="transparent"
        speed="2"
        style={{ width: '75px', height: '75px' }}
        loop
        autoplay>
      </dotlottie-player>
    </div>
  );
};

export default LoginAnimation;
