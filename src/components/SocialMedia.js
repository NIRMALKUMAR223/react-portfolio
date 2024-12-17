import React from "react";

function SocialMedia() {
  const icons = [
    {
      platform: "LinkedIn",
      href: "https://linkedin.com/in/nirmal-kumar-2b3544258",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-600"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-4.907c0-2.112-2.5-1.95-2.5 0v4.907h-3v-10h3v1.78c1.396-2.586 5.5-2.777 5.5 2.476v5.744z" />
        </svg>
      ),
    },
    {
      platform: "GitHub",
      href: "https://github.com/NIRMALKUMAR223",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-[#8878F] hover:text-gray-700"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.168c-3.338.724-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.304 3.492.998.108-.775.418-1.304.763-1.604-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.38 1.236-3.22-.124-.303-.536-1.524.116-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.005-.404 1.02.005 2.048.138 3.006.404 2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.241 2.874.118 3.176.77.84 1.232 1.91 1.232 3.22 0 4.609-2.807 5.617-5.479 5.916.43.372.823 1.103.823 2.222v3.293c0 .322.217.694.825.576 4.765-1.584 8.203-6.081 8.203-11.385 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      platform: "Instagram",
      href: "https://www.instagram.com/its_me__joy___/",
      icon: (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-8 w-8 text-[#E4405F] hover:text-pink-400" 
            viewBox="0 0 16 16"
            >
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>
      ),
    },
    {
      platform: "WhatsApp",
      href: "https://wa.me/6382339382",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" 
        className="h-8 w-8 text-[#E4405F] hover:text-pink-400"
          fill="#25D366" class="bi bi-whatsapp" viewBox="0 0 16 16">
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 
        7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
        </svg>

      ),
    },
  ];

  return (
    <div className="flex gap-4 justify-center mt-6">
      {icons.map(({ platform, href, icon }) => (
        <a
          key={platform}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 m-2 hover:text-blue-600 transition-colors"
          title={platform}
        >
          {icon}
        </a>
      ))}
    </div>
  );
}

export default SocialMedia;