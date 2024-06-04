export interface Filter {
    categories : Categories[]
    search : string
}

export interface Categories {
    keyFilter : string, 
    value : string | number
}