import { createContext, useState } from "react";

type OrganizeByContextProps = {
    choice: string;
    order: string;
    toSetChoiceAndOrder: (choice: string, order: string) => void;
}

const OrganizeByContext = createContext<OrganizeByContextProps>({} as OrganizeByContextProps);

const OrganizeByProvider = ({children}: {children: React.ReactNode}): JSX.Element => {
    const [choice, setChoice] = useState<string>('');
    const [order, setOrder] = useState<string>('');

    function toSetChoiceAndOrder(choice: string, order: string): void {
        setChoice(choice);
        setOrder(order);
    }

    return (
        <OrganizeByContext.Provider value={{choice, order, toSetChoiceAndOrder}}>
            {children}
        </OrganizeByContext.Provider>
    )
}

export {OrganizeByContext, OrganizeByProvider};