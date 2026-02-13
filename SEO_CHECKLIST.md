# Quick SEO Implementation Checklist

## ✅ COMPLETED (Already Implemented)

### Core SEO Infrastructure
- [x] next-seo package installed
- [x] SEO components created (SEO.js)
- [x] Default SEO config (next-seo.config.js)
- [x] Sitemap generation (next-sitemap)
- [x] robots.txt
- [x] manifest.json (PWA)
- [x] Security headers
- [x] Performance optimization
- [x] Homepage SEO content
- [x] FAQ schema
- [x] Organization schema
- [x] Breadcrumb schema

---

## 🚀 NEXT PRIORITY TASKS

### 1. Job Details Page SEO (HIGH PRIORITY)
**File:** `pages/jobs/[id].js`

```javascript
import { SEO, JobSchema, BreadcrumbSchema } from '../../components/SEO';

export default function JobDetails({ job }) {
  return (
    <>
      <SEO
        title={`${job.positionName} in ${job.location} | Apply Now`}
        description={`Apply for ${job.positionName} at ${job.company} in ${job.location}. Salary: ${job.salary}. Experience: ${job.experience}. Apply online at Pharma Talent Hub.`}
        canonical={`https://pharmatalenthub.in/jobs/${job._id}`}
        keywords={`${job.positionName}, ${job.company} jobs, pharma jobs in ${job.location}, ${job.department} jobs`}
      />
      
      <JobSchema job={job} />
      
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://pharmatalenthub.in' },
          { name: 'Jobs', url: 'https://pharmatalenthub.in/jobs' },
          { name: job.positionName, url: `https://pharmatalenthub.in/jobs/${job._id}` }
        ]}
      />
      
      {/* Rest of your component */}
    </>
  );
}
```

---

### 2. Create Location Pages (HIGH PRIORITY)
**Create:** `pages/location/[city].js`

```javascript
import { SEO, BreadcrumbSchema } from '../../components/SEO';

export default function LocationPage({ city, jobs }) {
  return (
    <>
      <SEO
        title={`Pharma Jobs in ${city} | Latest Pharmaceutical Vacancies`}
        description={`Find latest pharma jobs in ${city}. Browse QA, QC, Production, R&D positions from top pharmaceutical companies in ${city}. Apply now!`}
        canonical={`https://pharmatalenthub.in/location/${city.toLowerCase()}`}
        keywords={`pharma jobs in ${city}, pharmaceutical jobs ${city}, ${city} pharma vacancies, pharma companies in ${city}`}
      />
      
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://pharmatalenthub.in' },
          { name: 'Locations', url: 'https://pharmatalenthub.in/locations' },
          { name: city, url: `https://pharmatalenthub.in/location/${city.toLowerCase()}` }
        ]}
      />
      
      <h1>Pharma Jobs in {city}</h1>
      
      {/* SEO Content */}
      <section>
        <h2>Top Pharmaceutical Companies in {city}</h2>
        <p>
          {city} is one of India's leading pharmaceutical hubs with numerous 
          opportunities in Quality Assurance, Quality Control, Production, 
          R&D, and Regulatory Affairs.
        </p>
        
        {/* Job listings */}
      </section>
    </>
  );
}

// Static paths for major cities
export async function getStaticPaths() {
  const cities = [
    'pune', 'hyderabad', 'mumbai', 'ahmedabad', 'bangalore',
    'baddi', 'goa', 'indore', 'nashik', 'aurangabad'
  ];
  
  return {
    paths: cities.map(city => ({ params: { city } })),
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params }) {
  // Fetch jobs for this city
  const res = await fetch(`${API_URL}/api/jobs?location=${params.city}`);
  const jobs = await res.json();
  
  return {
    props: { city: params.city, jobs },
    revalidate: 3600 // Revalidate every hour
  };
}
```

---

### 3. Create Category Pages (MEDIUM PRIORITY)
**Create:** `pages/category/[slug].js`

```javascript
import { SEO, BreadcrumbSchema } from '../../components/SEO';

const categoryData = {
  'quality-assurance': {
    title: 'Quality Assurance',
    description: 'Quality Assurance (QA) jobs in pharmaceutical industry',
    keywords: 'pharma QA jobs, quality assurance pharma, QA officer jobs'
  },
  'quality-control': {
    title: 'Quality Control',
    description: 'Quality Control (QC) jobs in pharmaceutical industry',
    keywords: 'pharma QC jobs, quality control pharma, QC analyst jobs'
  },
  // Add more categories
};

export default function CategoryPage({ category, jobs }) {
  const catData = categoryData[category];
  
  return (
    <>
      <SEO
        title={`Latest ${catData.title} Pharma Jobs in India`}
        description={`Explore latest ${catData.description}. Find openings in top pharmaceutical companies and apply today.`}
        canonical={`https://pharmatalenthub.in/category/${category}`}
        keywords={catData.keywords}
      />
      
      <h1>{catData.title} Jobs in Pharmaceutical Industry</h1>
      {/* Job listings */}
    </>
  );
}
```

---

### 4. Add Alt Text to Images (MEDIUM PRIORITY)

**Update JobCard.js:**
```javascript
<img 
  src={image} 
  alt={`${company} - ${positionName} job opening`}
  loading="lazy"
/>
```

**Update all image components:**
- Company logos: `alt="${companyName} logo"`
- Job images: `alt="${jobTitle} at ${company}"`
- Icons: `alt="${iconPurpose} icon"`

---

### 5. Create Blog Section (MEDIUM PRIORITY)
**Create:** `pages/blog/index.js` and `pages/blog/[slug].js`

**Blog Topics:**
1. "How to Get a Pharma Job in India - Complete Guide 2026"
2. "Top 50 Pharma Interview Questions and Answers"
3. "Pharma Career Growth Roadmap - From Fresher to Manager"
4. "Best Pharmaceutical Companies to Work in India"
5. "Pharma Salary Trends in India 2026"
6. "Quality Assurance vs Quality Control in Pharma"
7. "How to Prepare for Pharma Job Interviews"
8. "Top Cities for Pharma Jobs in India"

---

### 6. Improve Search Functionality (LOW PRIORITY)

**Add to homepage:**
```javascript
// Auto-suggestions
const [suggestions, setSuggestions] = useState([]);

const handleSearchChange = async (value) => {
  setSearchInput(value);
  if (value.length > 2) {
    // Fetch suggestions
    const res = await fetch(`/api/suggestions?q=${value}`);
    const data = await res.json();
    setSuggestions(data);
  }
};
```

---

### 7. Add Related Jobs Section (LOW PRIORITY)

**In JobDetails page:**
```javascript
<section className="related-jobs">
  <h2>Related Jobs You May Like</h2>
  {relatedJobs.map(job => (
    <JobCard key={job._id} {...job} />
  ))}
</section>
```

---

## 📊 Tracking & Monitoring

### Setup Required:
1. **Google Search Console**
   - Add property: https://pharmatalenthub.in
   - Submit sitemap: https://pharmatalenthub.in/sitemap.xml
   - Monitor indexing status

2. **Google Analytics 4**
   - Already configured (G-4WXDW7C6GT)
   - Set up custom events for job applications
   - Track search queries

3. **Core Web Vitals**
   - Monitor in Search Console
   - Target: LCP < 2.5s, FID < 100ms, CLS < 0.1

---

## 🎯 Quick Wins (Do These First!)

1. ✅ Add SEO to job details page (30 min)
2. ✅ Create location pages for top 5 cities (1 hour)
3. ✅ Add alt text to all images (30 min)
4. ✅ Create 2-3 blog posts (2-3 hours)
5. ✅ Submit sitemap to Google Search Console (10 min)

---

## 📈 Expected Timeline

**Week 1:**
- Job details page SEO
- Location pages (5 cities)
- Image alt text
- Google Search Console setup

**Week 2:**
- Category pages
- Blog section (3 posts)
- Related jobs section

**Week 3:**
- More location pages
- More blog content
- Internal linking optimization

**Month 2-3:**
- Monitor and optimize
- Add more content
- Improve based on Search Console data

---

## 🔗 Useful Resources

- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)
- [next-seo Documentation](https://github.com/garmeeh/next-seo)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/)

---

**Last Updated:** February 14, 2026
