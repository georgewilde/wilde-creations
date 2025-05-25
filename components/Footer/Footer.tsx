import React from 'react';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full mt-6">
            <div className="bg-gray-800 text-white py-6 px-6">
                <p>
                    &copy; {currentYear} Wilde Creations. All rights reserved.
                </p>
            </div>
            <div className="bg-gray-900 text-white py-6 px-6">
                <p>
                    Most of the showcased work displayed on this site was
                    created while working for past full-time employers or while
                    under contract to other companies, all of who solely own the
                    rights to these materials.
                </p>
            </div>
        </footer>
    );
};
