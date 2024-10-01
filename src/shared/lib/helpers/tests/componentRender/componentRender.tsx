import { I18nextProvider } from 'react-i18next';
import {ReactNode} from "react";
import {render} from "@testing-library/react";
import i18nForTest from "shared/config/i18n/i18nForTest";
import {MemoryRouter} from "react-router-dom";

interface ComponentRenderOptions{
    route?:string
}

export const componentRender = (component: ReactNode, options: ComponentRenderOptions = {}) => {
    const {
        route = '/'
    } = options
    return (
        render(
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        )
    );
};

