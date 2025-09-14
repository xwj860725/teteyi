import React from 'react'
import { useTranslation } from 'react-i18next';

function Lang() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex flex-col items-center space-y-[2px] text-xs">
      <button
        onClick={() => changeLanguage('zh')}
        className={`no-underline ${i18n.language === 'zh' ? 'text-red-500' : 'text-gray-500'} hover:text-red-600 active:text-red-700`}
      >
        中文
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`no-underline ${i18n.language === 'en' ? 'text-red-500' : 'text-gray-500'} hover:text-red-600 active:text-red-700`}
      >
        EN
      </button>
    </div>
  );
}

export default Lang;
