// Single source of truth for contact data & locations.
export const WA_NUMBER = '6281517258271';
export const WA_DISPLAY = '+62 815-1725-8271';

export const waLink = (message?: string) =>
  message
    ? `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${WA_NUMBER}`;

export const ADDRESS = 'Kp. Kepuh, Desa Sindangheula, Kec. Pabuaran, Kab. Serang, Banten 42163';

export const MAPS_URL = 'https://www.google.com/maps/place/Perumahan+TerAs+Bahagia/@-6.1707999,106.1283178,17z/data=!4m10!1m2!2m1!1steras+bahagia!3m6!1s0x2e42210d54848b1f:0x3968791181411e98!8m2!3d-6.1707999!4d106.1328239!15sCg10ZXJhcyBiYWhhZ2lhWg8iDXRlcmFzIGJhaGFnaWGSARJyZWFsX2VzdGF0ZV9hZ2VuY3maAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjVrTWxOV1ZuTlpiR3cxVkVaT2JGVlZOWFZTUnpWMFQwWnNWMVZYWXhBQuABAPoBBAgAEC8!16s%2Fg%2F11n3pjdd8m?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D';

export const IG_LINK = 'https://www.instagram.com/terasbahagiaofficial';
export const TIKTOK_LINK = 'https://tiktok.com/@terasbahagiaofficial';
