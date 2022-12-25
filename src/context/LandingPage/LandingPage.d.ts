type TLandingPageContext = {
    pages: number;
    images: any[];
    texts: {
        titles: string[];
        legends: string[];
    },
    currentPage: number;
    setCurrentPage:  React.Dispatch<React.SetStateAction<number>>;
    currentImage: any;
    currentText: {
        title: string;
        legend: string;
    };
    nextPage: () => void;
    jumpPages: () => void;
    onPagePress: (number) => void;
    isLastPage: boolean;
}