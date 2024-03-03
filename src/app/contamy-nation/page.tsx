import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { type Metadata } from "next";

const DynamicMain = dynamic(() => import('../../components/contamy_nation/main'), {
    suspense: true,
    ssr: false
})

export const metadata: Metadata = {
    title: "Contamy Nation",
    description: "Contamy Nation",
};

const ContamyNation = ({}) => {
    return (
        <Suspense fallback={`Loading...`}>
            <Head>
                <title>Contamy Nation</title>
            </Head>
            <DynamicMain />
        </Suspense>
    );
};

export default ContamyNation;
