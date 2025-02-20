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
    porcentaje:string,
    color:string
}

export interface Tecnologias {
    [categoria:string] : Tecnologia[]
}

export interface Proyecto{
    title:string,
    urlImagen:string,
    description:string, 
    href:string
}

export interface Experience{
    titulo:string,
    date:string,
    description:string[],
}