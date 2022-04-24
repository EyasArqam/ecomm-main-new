export interface Description {
    id: number;
    language: string;
    name: string;
    description: string;
    friendlyUrl: string;
    keyWords?: any;
    highlights: string;
    metaDescription: string;
    title: string;
}

export interface Parent {
    id: number;
    code: string;
}

export interface Category {
    id: number;
    code: string;
    sortOrder: number;
    visible: boolean;
    featured: boolean;
    lineage: string;
    depth: number;
    parent?: any;
    description: Description;
    productCount: number;
    store: string;
    children: Category[];
}

export interface CategoriesResponse {
    totalPages: number;
    number: number;
    recordsTotal: number;
    recordsFiltered: number;
    categories: Category[];
}


