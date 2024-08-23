export interface TabData {
    id: number;
    name: string;
}

export interface Question {
    id: number;
    name: string;
    answer: string;
    categories: Category[]
}

export interface Category {
    id: number;
    name: string;
}

export interface ContentTabDefinition {
  editQuestion: {
    visible: boolean;
    data: Question | null;
  };
}

export const ContentTabs: ContentTabDefinition = {
  editQuestion: {
    visible: false,
    data: null,
  }
};