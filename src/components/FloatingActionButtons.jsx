import React from "react";

const FloatingActionButtons = () => {
  const handleWhatsApp = () => {
    const phoneNumber = "919876543210";
    const message = "Hello! I'm interested in your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhone = () => {
    const phoneNumber = "+919876543210";
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleChatbot = () => {
    alert("Chatbot feature coming soon! For now, please use WhatsApp or call us directly.");
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .floating-buttons-container {
            position: fixed !important;
            bottom: 20px !important;
            right: 20px !important;
            z-index: 99999999 !important;
            pointer-events: auto !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 12px !important;
            transform: translateZ(0) !important;
            -webkit-transform: translateZ(0) !important;
            will-change: transform !important;
            isolation: isolate !important;
            contain: layout style paint !important;
            -webkit-backface-visibility: hidden !important;
            backface-visibility: hidden !important;
            -webkit-perspective: 1000px !important;
            perspective: 1000px !important;
          }
          
          @media (max-width: 1024px) {
            .floating-buttons-container {
              position: fixed !important;
              bottom: 15px !important;
              right: 15px !important;
              z-index: 99999999 !important;
              transform: translateZ(0) !important;
              -webkit-transform: translateZ(0) !important;
              isolation: isolate !important;
              contain: layout style paint !important;
              -webkit-backface-visibility: hidden !important;
              backface-visibility: hidden !important;
              -webkit-perspective: 1000px !important;
              perspective: 1000px !important;
              -webkit-transform: translate3d(0, 0, 0) !important;
              transform: translate3d(0, 0, 0) !important;
            }
          }
          
          @media (max-width: 768px) {
            .floating-buttons-container {
              bottom: 15px !important;
              right: 15px !important;
              position: fixed !important;
              z-index: 99999999 !important;
              transform: translate3d(0, 0, 0) !important;
              -webkit-transform: translate3d(0, 0, 0) !important;
              isolation: isolate !important;
              contain: layout style paint !important;
              -webkit-backface-visibility: hidden !important;
              backface-visibility: hidden !important;
            }
          }
          
          @media (max-width: 480px) {
            .floating-buttons-container {
              bottom: 10px !important;
              right: 10px !important;
              position: fixed !important;
              z-index: 99999999 !important;
              transform: translate3d(0, 0, 0) !important;
              -webkit-transform: translate3d(0, 0, 0) !important;
              isolation: isolate !important;
              contain: layout style paint !important;
              -webkit-backface-visibility: hidden !important;
              backface-visibility: hidden !important;
            }
          }
          
          .floating-buttons-container * {
            -webkit-transform: translateZ(0) !important;
            transform: translateZ(0) !important;
          }
        `
      }} />
      <div className="floating-buttons-container">
      <button
        onClick={handleWhatsApp}
        style={{
          width: '56px',
          height: '56px',
          backgroundColor: '#25D366',
          color: 'white',
          borderRadius: '50%',
          border: 'none',
          boxShadow: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.boxShadow = 'none';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = 'none';
        }}
      >
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </button>

      <button
        onClick={handlePhone}
        style={{
          width: '56px',
          height: '56px',
          backgroundColor: '#03fcec',
          color: 'white',
          borderRadius: '50%',
          border: 'none',
          boxShadow: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.boxShadow = 'none';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = 'none';
        }}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      </button>

      <button
        onClick={handleChatbot}
        style={{
          width: '56px',
          height: '56px',
          backgroundColor: '#2a27da',
          color: 'white',
          borderRadius: '50%',
          border: 'none',
          boxShadow: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.boxShadow = 'none';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = 'none';
        }}
      >
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16ZM7 9H17V11H7V9ZM7 12H15V14H7V12Z"/>
        </svg>
      </button>
      </div>
    </>
  );
};

export default FloatingActionButtons;