import React from 'react';
import {t} from 'i18next';
import {useTranslation} from "react-i18next";
import {gql, useQuery} from "@apollo/client";
import {ThemeProvider} from "styled-components";
import {styleGlobals} from "../constants";
import {Button} from "../components";

const lngs: { [index: string]: any } = {
    cs: {nativeName: 'Čeština'},
    en: {nativeName: 'Angličtina'},
}

const App = (props: any) => {
    const {data} = useQuery(gql`
        query {
            users(count: 10, offset:0) {
                uuid,
                name,
                email
            }
        }
    `)
    console.log(data)
    const {i18n} = useTranslation()
    return (
        <div className="app">
            <ThemeProvider theme={styleGlobals}>
                <div style={{margin: '0 23.1%'}}>
                    {t('hello')} Kreativ
                    {Object.keys(lngs).map((lng) => (
                        <button
                            key={lng}

                            style={{fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal'}}
                            type="submit"
                            onClick={() => i18n.changeLanguage(lng)}>
                            {lngs[lng].nativeName}
                        </button>
                    ))}
                    <Button
                        text="Primary"
                    />
                </div>
            </ThemeProvider>
        </div>
    );
};

export default App;
