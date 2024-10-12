interface ISection {
    name: string,
    href: string,
}

export const Sections: ISection[] = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Profile',
        href: '/profile',
    },
    {
        name: 'Contact',
        href: '/contact'
    }
];