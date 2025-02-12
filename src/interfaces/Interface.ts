export interface SocialMediaProps {
    name: string;
    href: string;
    path: string;
}

export interface MainCardsProps {
    title?: string;
    description: string;
}

export interface Tecnologia {
    icon:string,
    nombre:string,
    porcentaje:string
}

export interface Tecnologias {
    [categoria:string] : Tecnologia[]
}