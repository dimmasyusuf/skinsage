import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 py-8 md:px-6">
      <div className="mx-auto flex max-w-screen-lg justify-center">
        <p className="prose prose-sm text-center">&copy; {year} SkinSage. All rights reserved.</p>
      </div>
    </footer>
  );
}
