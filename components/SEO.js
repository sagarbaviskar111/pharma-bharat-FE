import { NextSeo, JobPostingJsonLd, BreadcrumbJsonLd, OrganizationJsonLd } from 'next-seo';

export const SEO = ({
    title,
    description,
    canonical,
    ogImage,
    ogType = 'website',
    noindex = false,
    nofollow = false,
    keywords,
}) => {
    const siteUrl = 'https://pharmatalenthub.in';

    return (
        <NextSeo
            title={title}
            description={description}
            canonical={canonical || siteUrl}
            noindex={noindex}
            nofollow={nofollow}
            openGraph={{
                type: ogType,
                url: canonical || siteUrl,
                title: title,
                description: description,
                images: ogImage ? [
                    {
                        url: ogImage,
                        width: 1200,
                        height: 630,
                        alt: title,
                    },
                ] : [
                    {
                        url: `${siteUrl}/og-image.jpg`,
                        width: 1200,
                        height: 630,
                        alt: 'Pharma Talent Hub',
                    },
                ],
                site_name: 'Pharma Talent Hub',
            }}
            twitter={{
                handle: '@PharmaTalentHub',
                site: '@PharmaTalentHub',
                cardType: 'summary_large_image',
            }}
            additionalMetaTags={keywords ? [
                {
                    name: 'keywords',
                    content: keywords,
                },
            ] : []}
        />
    );
};

// Job Posting Schema
export const JobSchema = ({ job }) => {
    if (!job) return null;

    const schema = {
        datePosted: job.createdAt || new Date().toISOString(),
        description: job.description || job.positionName,
        title: job.positionName,
        employmentType: job.employmentType || 'FULL_TIME',
        hiringOrganization: {
            name: job.company,
            sameAs: job.companyWebsite || 'https://pharmatalenthub.in',
        },
        jobLocation: {
            address: {
                addressLocality: job.location || 'India',
                addressCountry: 'IN',
            },
        },
        baseSalary: job.salary ? {
            currency: 'INR',
            value: {
                value: job.salary,
                unitText: 'YEAR',
            },
        } : undefined,
        validThrough: job.validThrough || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    };

    return <JobPostingJsonLd {...schema} />;
};

// Breadcrumb Schema
export const BreadcrumbSchema = ({ items }) => {
    if (!items || items.length === 0) return null;

    return (
        <BreadcrumbJsonLd
            itemListElements={items.map((item, index) => ({
                position: index + 1,
                name: item.name,
                item: item.url,
            }))}
        />
    );
};

// Organization Schema
export const OrganizationSchema = () => {
    return (
        <OrganizationJsonLd
            type="Organization"
            id="https://pharmatalenthub.in"
            name="Pharma Talent Hub"
            url="https://pharmatalenthub.in"
            logo="https://pharmatalenthub.in/logo.png"
            sameAs={[
                'https://www.facebook.com/pharmatalenthub',
                'https://www.linkedin.com/company/pharmatalenthub',
                'https://twitter.com/PharmaTalentHub',
            ]}
            contactPoint={[
                {
                    telephone: '+91-XXXXXXXXXX',
                    contactType: 'customer service',
                    areaServed: 'IN',
                    availableLanguage: ['English', 'Hindi'],
                },
            ]}
        />
    );
};

// FAQ Schema
export const FAQSchema = ({ faqs }) => {
    if (!faqs || faqs.length === 0) return null;

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default SEO;
