import React from 'react';
import Container from '../components/common/Container';
import Header from '../components/common/Header';
import Breadcrumbs from '../components/common/Breadcrumbs';
import Footer from '../components/common/Footer';
import PoliciesPage from '../components/pages/PoliciesPage';

const Policies: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <Breadcrumbs />
                <PoliciesPage />
            </Container>
            <Footer />
        </>
    );
};

export default Policies;