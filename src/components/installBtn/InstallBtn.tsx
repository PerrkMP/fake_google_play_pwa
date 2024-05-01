import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';

import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import './InstallBtn.css';


const InstallBtn: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [appInstalled, setAppInstalled] = useState<boolean>(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: any) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Пользователь согласился на установку');
          setAppInstalled(true); // Устанавливаем состояние установки приложения
        } else {
          console.log('Пользователь отказался от установки');
        }
        setDeferredPrompt(null);
      });
    }
  };

  const handleOpen = () => {
    // Открываем установленное PWA
    window.open('https://testpwa.mediapoint-soft.pro', '_blank');
  };

  return (
    <div>
      <Container className="InstallBtn" maxWidth="sm">
        {appInstalled ? (
          <Button
            className="InstallBtn-button"
            variant="contained"
            onClick={handleOpen}
          >
            Open
          </Button>
        ) : (
          <Button
            className="InstallBtn-button"
            variant="contained"
            onClick={handleInstall}
          >
            Install
          </Button>
        )}
      </Container>
    </div>
  );
};

export default InstallBtn;