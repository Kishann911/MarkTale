import { LucideIcon } from 'lucide-react';
import { Video, Search, FileText, Target, ShieldCheck, Palette, TrendingUp, BarChart, Globe } from 'lucide-react';

export interface ServiceData {
    slug: string;
    title: string;
    shortTitle: string;
    icon: LucideIcon;
    tagline: string;
    heroDescription: string;
    metaDescription: string;
    sections: {
        whyChoose?: {
            title: string;
            content: string;
            points: string[];
        };
        problem?: {
            title: string;
            content: string;
        };
        differentiators?: {
            title: string;
            points: { title: string; description: string }[];
        };
        framework?: {
            title: string;
            steps: { title: string; description: string }[];
        };
        platforms?: {
            title: string;
            items: { name: string; description: string }[];
        };
        results?: {
            title: string;
            outcomes: string[];
        };
    };
    faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceData[] = [
    {
        slug: 'web-development',
        title: 'Web Development Services',
        shortTitle: 'Web Development',
        icon: Globe,
        tagline: 'Your Partner For High-Performing Web Development',
        heroDescription: 'We deliver web development services engineered for performance, scalability, and long-term business growth. Our approach blends technical excellence, conversion-focused design, and strategic architecture to create digital experiences that attract, engage, and convert.',
        metaDescription: 'High-performing web development services for startups and enterprises. Custom solutions built for speed, scalability, and conversions.',
        sections: {
            whyChoose: {
                title: 'Start Your Project Today',
                content: 'A high-performing website begins with a clear strategy and a disciplined execution plan. We initiate every project with a deep understanding of your objectives, audience behavior, and competitive landscape. This foundation enables us to build secure, scalable, and SEO-ready websites that perform from day one.',
                points: [
                    'Transparent and collaborative process',
                    'Timely delivery without compromising quality',
                    'Strategic alignment with business goals',
                    'Future-proof digital presence'
                ]
            },
            problem: {
                title: 'Is Your Website Driving Customers Away?',
                content: 'Slow load times, outdated interfaces, poor mobile responsiveness, and confusing navigation cost businesses valuable opportunities. A website that fails to communicate value or guide users effectively erodes trust and diminishes conversions. We eliminate friction points through performance optimization, UX refinement, and conversion-focused layouts. By improving page speed, accessibility, and content hierarchy, we transform underperforming websites into powerful acquisition and engagement tools.'
            },
            differentiators: {
                title: 'What Sets Us Apart: A Team That Builds Winning Websites',
                points: [
                    {
                        title: 'Custom Development',
                        description: 'Tailored to your business logic, not templates'
                    },
                    {
                        title: 'Clean, Maintainable Code',
                        description: 'Built for long-term scalability and easy updates'
                    },
                    {
                        title: 'SEO-First Architecture',
                        description: 'Supports organic visibility from day one'
                    },
                    {
                        title: 'Security Best Practices',
                        description: 'Protecting data and users at every level'
                    },
                    {
                        title: 'Performance Optimization',
                        description: 'Faster load times drive higher engagement'
                    }
                ]
            },
            framework: {
                title: 'Our Proven Framework for High-Performing Websites',
                steps: [
                    {
                        title: 'Discovery & Strategy',
                        description: 'We define goals, success metrics, and technical requirements. Audience research and competitor analysis inform design and functionality decisions.'
                    },
                    {
                        title: 'UX/UI Design',
                        description: 'User journeys are mapped to reduce friction and guide actions. Visual design reinforces brand credibility while prioritizing usability and accessibility.'
                    },
                    {
                        title: 'Development & Integration',
                        description: 'Our developers implement robust architectures using modern frameworks and secure coding standards. Third-party integrations, APIs, and CMS configurations are executed with precision.'
                    },
                    {
                        title: 'Quality Assurance & Optimization',
                        description: 'Rigorous testing ensures cross-browser compatibility, responsive performance, and security compliance. Speed optimization and on-page SEO are finalized before launch.'
                    },
                    {
                        title: 'Launch & Continuous Improvement',
                        description: 'Post-launch monitoring and analytics guide ongoing enhancements, ensuring sustained performance and growth.'
                    }
                ]
            },
            platforms: {
                title: 'Choosing the Right Platform to Match Your Vision',
                items: [
                    {
                        name: 'Custom Web Development',
                        description: 'For complex business logic and enterprise requirements'
                    },
                    {
                        name: 'WordPress Development',
                        description: 'Flexible content management and SEO-friendly publishing'
                    },
                    {
                        name: 'ECommerce Platforms',
                        description: 'Shopify or WooCommerce for conversion-driven online stores'
                    },
                    {
                        name: 'Headless CMS Solutions',
                        description: 'Omnichannel content delivery and performance'
                    },
                    {
                        name: 'Magento',
                        description: 'Ideal for mid-sized and enterprise-level e-commerce solutions'
                    }
                ]
            },
            results: {
                title: 'Results That Speak for Themselves',
                outcomes: [
                    'Higher search engine visibility',
                    'Increased conversion rates',
                    'Improved user retention',
                    'Reduced maintenance costs through scalable architecture',
                    'Faster load times reducing bounce rates'
                ]
            }
        },
        faqs: [
            {
                question: 'How long does a web development project take?',
                answer: 'Project timelines vary based on complexity, features, and integrations. Most projects range from several weeks to a few months, with clear milestones throughout.'
            },
            {
                question: 'Do you provide SEO-ready websites?',
                answer: 'Yes. Every website is built with technical SEO best practices, including clean URLs, optimized page speed, mobile responsiveness, and structured data readiness.'
            },
            {
                question: 'Can you redesign an existing website?',
                answer: 'We specialize in website redesigns that improve performance, usability, and conversions while preserving brand equity.'
            },
            {
                question: 'Is ongoing support available after launch?',
                answer: 'We offer maintenance, performance monitoring, and continuous optimization to ensure long-term success.'
            },
            {
                question: 'Do you build secure websites?',
                answer: 'Security is embedded into our development process, including SSL implementation, secure authentication, and regular updates.'
            }
        ]
    },
    {
        slug: 'video-content-creation',
        title: 'Video Content Creation Services',
        shortTitle: 'Video Content Creation',
        icon: Video,
        tagline: 'Captivating Visual Storytelling That Drives Engagement',
        heroDescription: 'We create high-impact video content that captures attention, communicates your message, and drives measurable results. From concept to final cut, our team delivers professional video production that elevates your brand and engages your audience across every platform.',
        metaDescription: 'Professional video content creation services. High-quality production, storytelling, and video marketing that drives engagement and conversions.',
        sections: {
            whyChoose: {
                title: 'Transform Your Message Into Compelling Visual Stories',
                content: 'Video is the most powerful medium for brand communication. We combine creative storytelling with technical excellence to produce videos that resonate with your audience and achieve your business objectives. Every project is crafted to maximize engagement and deliver measurable ROI.',
                points: [
                    'End-to-end production from concept to delivery',
                    'Professional cinematography and editing',
                    'Platform-optimized content for social, web, and ads',
                    'Data-driven creative strategies'
                ]
            },
            problem: {
                title: 'Is Your Video Content Failing to Connect?',
                content: 'Poor production quality, unclear messaging, and generic content fail to capture attention in today\'s saturated digital landscape. Videos that don\'t align with platform best practices or audience preferences result in low engagement and wasted budgets. We solve this through strategic creative development, professional production standards, and platform-specific optimization that ensures your content performs.'
            },
            differentiators: {
                title: 'What Makes Our Video Production Stand Out',
                points: [
                    {
                        title: 'Strategic Storytelling',
                        description: 'Every video is built around a clear narrative that aligns with your brand and goals'
                    },
                    {
                        title: 'Professional Production',
                        description: 'Cinema-grade equipment and experienced crew for flawless execution'
                    },
                    {
                        title: 'Platform Optimization',
                        description: 'Content tailored for YouTube, Instagram, LinkedIn, TikTok, and more'
                    },
                    {
                        title: 'Fast Turnaround',
                        description: 'Efficient workflows without compromising quality'
                    },
                    {
                        title: 'Performance Focus',
                        description: 'Videos designed to drive views, engagement, and conversions'
                    }
                ]
            },
            framework: {
                title: 'Our Video Production Process',
                steps: [
                    {
                        title: 'Discovery & Concept Development',
                        description: 'We define objectives, target audience, and key messages. Creative concepts are developed based on your brand guidelines and campaign goals.'
                    },
                    {
                        title: 'Pre-Production Planning',
                        description: 'Scriptwriting, storyboarding, location scouting, and talent coordination. Every detail is planned to ensure smooth execution.'
                    },
                    {
                        title: 'Production & Filming',
                        description: 'Professional filming with high-end equipment, lighting, and audio. Our experienced crew captures every shot with precision.'
                    },
                    {
                        title: 'Post-Production & Editing',
                        description: 'Expert editing, color grading, motion graphics, and sound design bring your story to life with polish and impact.'
                    },
                    {
                        title: 'Delivery & Distribution',
                        description: 'Optimized formats for every platform, with guidance on distribution strategy and performance tracking.'
                    }
                ]
            },
            platforms: {
                title: 'Video Content for Every Platform',
                items: [
                    {
                        name: 'Brand Videos',
                        description: 'Company overviews, mission statements, and culture videos'
                    },
                    {
                        name: 'Product Demos',
                        description: 'Showcase features and benefits with compelling demonstrations'
                    },
                    {
                        name: 'Social Media Content',
                        description: 'Short-form videos optimized for Instagram, TikTok, and LinkedIn'
                    },
                    {
                        name: 'Testimonials & Case Studies',
                        description: 'Customer success stories that build trust and credibility'
                    },
                    {
                        name: 'Explainer Videos',
                        description: 'Simplify complex concepts with engaging animated or live-action content'
                    }
                ]
            },
            results: {
                title: 'Proven Video Performance',
                outcomes: [
                    'Higher engagement rates across all platforms',
                    'Increased brand awareness and recall',
                    'Improved conversion rates on landing pages',
                    'Stronger emotional connection with audiences',
                    'Enhanced social media reach and virality'
                ]
            }
        },
        faqs: [
            {
                question: 'What types of videos do you produce?',
                answer: 'We produce a wide range of video content including brand videos, product demos, testimonials, explainer videos, social media content, event coverage, and commercial advertisements.'
            },
            {
                question: 'How long does video production take?',
                answer: 'Timelines vary based on complexity. Simple social media videos can be completed in 1-2 weeks, while comprehensive brand videos may take 4-6 weeks from concept to final delivery.'
            },
            {
                question: 'Do you provide scriptwriting services?',
                answer: 'Yes, our team includes experienced scriptwriters who craft compelling narratives tailored to your brand voice and objectives.'
            },
            {
                question: 'Can you optimize videos for different platforms?',
                answer: 'Absolutely. We deliver platform-specific versions optimized for aspect ratios, length, and format requirements for YouTube, Instagram, TikTok, LinkedIn, and more.'
            },
            {
                question: 'What is included in your video production services?',
                answer: 'Our full-service production includes concept development, scriptwriting, storyboarding, filming, editing, color grading, motion graphics, sound design, and final delivery in multiple formats.'
            }
        ]
    },
    {
        slug: 'market-research',
        title: 'Market Research Services',
        shortTitle: 'Market Research',
        icon: Search,
        tagline: 'Data-Driven Insights That Power Strategic Decisions',
        heroDescription: 'We deliver comprehensive market research that uncovers actionable insights about your customers, competitors, and industry landscape. Our research methodologies combine qualitative depth with quantitative rigor to inform strategic decisions and drive business growth.',
        metaDescription: 'Professional market research services. Qualitative and quantitative analysis, consumer insights, and competitive intelligence for strategic decision-making.',
        sections: {
            whyChoose: {
                title: 'Make Informed Decisions With Reliable Data',
                content: 'Successful marketing strategies are built on deep customer understanding. Our research services provide the insights you need to identify opportunities, mitigate risks, and optimize your marketing investments. We transform raw data into strategic recommendations that drive measurable business outcomes.',
                points: [
                    'Custom research designed for your specific objectives',
                    'Mixed-method approach combining qualitative and quantitative data',
                    'Actionable insights, not just data reports',
                    'Experienced researchers with industry expertise'
                ]
            },
            problem: {
                title: 'Are You Making Decisions Based on Assumptions?',
                content: 'Launching products, entering new markets, or investing in campaigns without validated insights leads to costly mistakes. Relying on outdated data or gut feelings instead of current market intelligence puts your business at risk. We eliminate uncertainty through rigorous research methodologies that reveal what your customers truly want, how they behave, and what drives their decisions.'
            },
            differentiators: {
                title: 'Our Research Advantage',
                points: [
                    {
                        title: 'Custom Methodologies',
                        description: 'Research designs tailored to your unique business questions'
                    },
                    {
                        title: 'Deep Analysis',
                        description: 'Beyond surface-level data to uncover meaningful patterns and insights'
                    },
                    {
                        title: 'Strategic Recommendations',
                        description: 'Clear, actionable guidance based on research findings'
                    },
                    {
                        title: 'Industry Expertise',
                        description: 'Researchers with domain knowledge in your sector'
                    },
                    {
                        title: 'Fast Turnaround',
                        description: 'Efficient execution without compromising research quality'
                    }
                ]
            },
            framework: {
                title: 'Our Research Process',
                steps: [
                    {
                        title: 'Research Design',
                        description: 'We define research objectives, key questions, and appropriate methodologies. Sample selection and data collection instruments are carefully designed.'
                    },
                    {
                        title: 'Data Collection',
                        description: 'Execution of surveys, interviews, focus groups, or observational studies. We ensure data quality through rigorous quality control protocols.'
                    },
                    {
                        title: 'Analysis & Synthesis',
                        description: 'Statistical analysis, thematic coding, and pattern identification. Data is synthesized to reveal meaningful insights and trends.'
                    },
                    {
                        title: 'Insight Development',
                        description: 'Translation of findings into strategic insights. We identify opportunities, risks, and implications for your business.'
                    },
                    {
                        title: 'Reporting & Recommendations',
                        description: 'Clear presentation of findings with actionable recommendations. We provide ongoing support for implementation.'
                    }
                ]
            },
            platforms: {
                title: 'Research Services We Offer',
                items: [
                    {
                        name: 'Customer Insights',
                        description: 'Understanding needs, preferences, and behaviors of your target audience'
                    },
                    {
                        name: 'Competitive Analysis',
                        description: 'Benchmarking against competitors and identifying market positioning opportunities'
                    },
                    {
                        name: 'Market Sizing & Forecasting',
                        description: 'Quantifying market opportunities and predicting future trends'
                    },
                    {
                        name: 'Brand Perception Studies',
                        description: 'Measuring brand awareness, perception, and equity in the market'
                    },
                    {
                        name: 'Product Testing',
                        description: 'Validating product concepts and features before launch'
                    }
                ]
            },
            results: {
                title: 'Research-Driven Business Impact',
                outcomes: [
                    'Reduced risk in strategic decision-making',
                    'Improved product-market fit',
                    'More effective marketing messaging and positioning',
                    'Identification of untapped market opportunities',
                    'Enhanced customer satisfaction and retention'
                ]
            }
        },
        faqs: [
            {
                question: 'What research methodologies do you use?',
                answer: 'We employ a mix of qualitative methods (interviews, focus groups, ethnography) and quantitative methods (surveys, analytics, statistical analysis) based on your research objectives.'
            },
            {
                question: 'How long does a market research project take?',
                answer: 'Project timelines vary based on scope and methodology. Quick surveys can be completed in 2-3 weeks, while comprehensive studies may take 6-8 weeks from design to final reporting.'
            },
            {
                question: 'Can you research niche or specialized markets?',
                answer: 'Yes, we have experience researching diverse industries and can recruit specialized respondents through our extensive panel networks and recruitment partners.'
            },
            {
                question: 'How do you ensure data quality?',
                answer: 'We implement rigorous quality control measures including validation checks, attention filters, response time monitoring, and data cleaning protocols to ensure reliable, high-quality data.'
            },
            {
                question: 'What deliverables do you provide?',
                answer: 'Deliverables include comprehensive research reports, executive summaries, data visualizations, strategic recommendations, and presentation decks. Raw data can also be provided upon request.'
            }
        ]
    },
    {
        slug: 'marketing-plan-development',
        title: 'Marketing Plan Development Services',
        shortTitle: 'Marketing Plan Development',
        icon: FileText,
        tagline: 'Strategic Roadmaps That Drive Measurable Growth',
        heroDescription: 'We develop comprehensive marketing plans that align with your business objectives and deliver measurable results. Our strategic approach combines market analysis, competitive intelligence, and creative thinking to create actionable roadmaps for sustainable growth.',
        metaDescription: 'Professional marketing plan development services. Strategic planning, data-driven insights, and comprehensive roadmaps for business growth.',
        sections: {
            whyChoose: {
                title: 'Build a Winning Marketing Strategy',
                content: 'A well-crafted marketing plan is the foundation of business success. We create strategic frameworks that define clear objectives, identify target audiences, allocate resources effectively, and establish metrics for success. Our plans are practical, actionable, and designed to evolve with your business.',
                points: [
                    'Comprehensive analysis of market opportunities',
                    'Clear objectives and KPIs for accountability',
                    'Integrated multi-channel strategies',
                    'Budget allocation and ROI projections'
                ]
            },
            problem: {
                title: 'Is Your Marketing Lacking Direction?',
                content: 'Marketing without a strategic plan leads to wasted budgets, inconsistent messaging, and missed opportunities. Reactive tactics without clear objectives fail to build momentum or deliver sustainable growth. We solve this through structured planning that aligns marketing activities with business goals, ensures efficient resource allocation, and creates a clear path to measurable success.'
            },
            differentiators: {
                title: 'Our Strategic Planning Approach',
                points: [
                    {
                        title: 'Business-First Thinking',
                        description: 'Marketing strategies aligned with your overall business objectives'
                    },
                    {
                        title: 'Data-Driven Decisions',
                        description: 'Plans grounded in market research and competitive analysis'
                    },
                    {
                        title: 'Integrated Approach',
                        description: 'Seamless coordination across traditional and digital channels'
                    },
                    {
                        title: 'Measurable Outcomes',
                        description: 'Clear KPIs and tracking mechanisms for accountability'
                    },
                    {
                        title: 'Flexible Frameworks',
                        description: 'Plans designed to adapt as market conditions evolve'
                    }
                ]
            },
            framework: {
                title: 'Our Marketing Planning Process',
                steps: [
                    {
                        title: 'Situation Analysis',
                        description: 'Comprehensive assessment of your current position, including SWOT analysis, market trends, competitive landscape, and internal capabilities.'
                    },
                    {
                        title: 'Objective Setting',
                        description: 'Define SMART goals aligned with business priorities. Establish clear KPIs and success metrics for tracking progress.'
                    },
                    {
                        title: 'Strategy Development',
                        description: 'Develop positioning, messaging, and channel strategies. Create integrated campaigns that leverage your competitive advantages.'
                    },
                    {
                        title: 'Tactical Planning',
                        description: 'Detail specific activities, timelines, responsibilities, and budgets. Create implementation roadmaps with clear milestones.'
                    },
                    {
                        title: 'Measurement Framework',
                        description: 'Establish tracking systems, reporting cadences, and optimization protocols to ensure continuous improvement.'
                    }
                ]
            },
            platforms: {
                title: 'Marketing Plan Components',
                items: [
                    {
                        name: 'Market Analysis',
                        description: 'Industry trends, customer insights, and competitive intelligence'
                    },
                    {
                        name: 'Brand Positioning',
                        description: 'Differentiation strategy and messaging framework'
                    },
                    {
                        name: 'Channel Strategy',
                        description: 'Integrated approach across digital, traditional, and emerging channels'
                    },
                    {
                        name: 'Content Calendar',
                        description: 'Planned content themes, campaigns, and distribution schedules'
                    },
                    {
                        name: 'Budget & Resource Allocation',
                        description: 'Investment priorities and expected ROI by initiative'
                    }
                ]
            },
            results: {
                title: 'Strategic Planning Outcomes',
                outcomes: [
                    'Clear direction and alignment across teams',
                    'More efficient marketing spend and higher ROI',
                    'Consistent brand messaging across channels',
                    'Faster decision-making with defined frameworks',
                    'Measurable progress toward business objectives'
                ]
            }
        },
        faqs: [
            {
                question: 'How long does it take to develop a marketing plan?',
                answer: 'A comprehensive marketing plan typically takes 4-6 weeks to develop, including research, strategy development, and stakeholder alignment. Timeline varies based on business complexity.'
            },
            {
                question: 'Do you help with plan implementation?',
                answer: 'Yes, we offer implementation support including campaign execution, team training, and ongoing optimization to ensure your plan delivers results.'
            },
            {
                question: 'Can you create plans for specific campaigns or initiatives?',
                answer: 'Absolutely. We develop both comprehensive annual marketing plans and focused campaign plans for product launches, market entry, or specific initiatives.'
            },
            {
                question: 'How do you measure plan effectiveness?',
                answer: 'We establish clear KPIs during planning and provide regular performance reports tracking progress against objectives. Plans include built-in review cycles for optimization.'
            },
            {
                question: 'What if our business changes during plan execution?',
                answer: 'Our plans are designed to be flexible. We build in review points and provide guidance on adapting strategies as market conditions or business priorities evolve.'
            }
        ]
    },
    {
        slug: 'lead-generation',
        title: 'Lead Generation Services',
        shortTitle: 'Lead Generation',
        icon: Target,
        tagline: 'Filling Your Pipeline With High-Quality Prospects',
        heroDescription: 'We generate qualified leads that convert into customers. Our multi-channel approach combines targeted outreach, compelling content, and conversion optimization to deliver a consistent flow of sales-ready prospects for your business.',
        metaDescription: 'Professional lead generation services. Targeted campaigns, conversion optimization, and qualified leads that drive revenue growth.',
        sections: {
            whyChoose: {
                title: 'Generate Leads That Actually Convert',
                content: 'Lead generation is about quality, not just quantity. We focus on attracting prospects who match your ideal customer profile and are ready to engage with your sales team. Our strategies combine inbound and outbound tactics to create a sustainable pipeline of opportunities.',
                points: [
                    'Targeted campaigns reaching your ideal customers',
                    'Multi-channel approach for maximum reach',
                    'Lead scoring and qualification systems',
                    'CRM integration and sales enablement'
                ]
            },
            problem: {
                title: 'Struggling With Empty Pipelines?',
                content: 'Low-quality leads waste sales time and marketing budgets. Generic campaigns that don\'t target the right audience result in poor conversion rates and frustrated teams. We solve this through precise targeting, compelling value propositions, and conversion-optimized experiences that attract prospects who are genuinely interested in your solutions.'
            },
            differentiators: {
                title: 'Our Lead Generation Advantage',
                points: [
                    {
                        title: 'Quality Over Quantity',
                        description: 'Focus on leads that match your ideal customer profile'
                    },
                    {
                        title: 'Multi-Channel Strategy',
                        description: 'Integrated campaigns across email, social, content, and paid channels'
                    },
                    {
                        title: 'Conversion Optimization',
                        description: 'Continuous testing and refinement of landing pages and forms'
                    },
                    {
                        title: 'Lead Nurturing',
                        description: 'Automated sequences that warm prospects for sales conversations'
                    },
                    {
                        title: 'Transparent Reporting',
                        description: 'Clear visibility into lead volume, quality, and conversion rates'
                    }
                ]
            },
            framework: {
                title: 'Our Lead Generation Process',
                steps: [
                    {
                        title: 'Audience Definition',
                        description: 'Develop detailed ideal customer profiles and targeting criteria. Identify pain points, motivations, and buying behaviors.'
                    },
                    {
                        title: 'Campaign Strategy',
                        description: 'Design multi-channel campaigns with compelling offers and messaging. Select optimal channels based on audience preferences.'
                    },
                    {
                        title: 'Asset Creation',
                        description: 'Develop high-converting landing pages, lead magnets, and nurture content. Create compelling ad creative and email sequences.'
                    },
                    {
                        title: 'Campaign Execution',
                        description: 'Launch campaigns across selected channels. Implement tracking and lead capture systems with CRM integration.'
                    },
                    {
                        title: 'Optimization & Scaling',
                        description: 'Analyze performance data and optimize for better results. Scale successful campaigns and refine underperforming elements.'
                    }
                ]
            },
            platforms: {
                title: 'Lead Generation Channels',
                items: [
                    {
                        name: 'Content Marketing',
                        description: 'Gated resources, webinars, and thought leadership that attract prospects'
                    },
                    {
                        name: 'Paid Advertising',
                        description: 'Targeted campaigns on Google, LinkedIn, Facebook, and industry platforms'
                    },
                    {
                        name: 'Email Outreach',
                        description: 'Personalized sequences that engage prospects and book meetings'
                    },
                    {
                        name: 'Social Media',
                        description: 'Organic and paid social strategies that build awareness and capture interest'
                    },
                    {
                        name: 'SEO & Organic',
                        description: 'Search-optimized content that attracts high-intent prospects'
                    }
                ]
            },
            results: {
                title: 'Lead Generation Results',
                outcomes: [
                    'Consistent flow of qualified leads',
                    'Higher sales conversion rates',
                    'Reduced cost per acquisition',
                    'Shorter sales cycles',
                    'Improved marketing ROI'
                ]
            }
        },
        faqs: [
            {
                question: 'How quickly can you generate leads?',
                answer: 'Timeline varies by channel. Paid campaigns can generate leads within days, while SEO and content strategies build momentum over 2-3 months. We typically recommend a multi-channel approach for consistent results.'
            },
            {
                question: 'What industries do you generate leads for?',
                answer: 'We work across B2B and B2C sectors including SaaS, professional services, e-commerce, real estate, healthcare, and more. Our strategies are customized for each industry and target audience.'
            },
            {
                question: 'How do you ensure lead quality?',
                answer: 'We implement qualification criteria, lead scoring systems, and validation processes to ensure leads meet your requirements. Regular feedback loops with sales teams help refine targeting.'
            },
            {
                question: 'Do you integrate with our CRM?',
                answer: 'Yes, we integrate with major CRM platforms including Salesforce, HubSpot, Pipedrive, and others to ensure seamless lead flow and tracking.'
            },
            {
                question: 'What is your pricing model?',
                answer: 'We offer flexible pricing including monthly retainers, cost-per-lead models, and performance-based arrangements. Pricing depends on target audience, channels, and volume requirements.'
            }
        ]
    },
    {
        slug: 'online-reputation-management',
        title: 'Online Reputation Management Services',
        shortTitle: 'Online Reputation Management',
        icon: ShieldCheck,
        tagline: 'Protecting and Enhancing Your Brand Image',
        heroDescription: 'We safeguard your brand reputation across digital channels through proactive monitoring, strategic response, and positive content amplification. Our comprehensive approach builds trust, mitigates risks, and strengthens your brand perception in the marketplace.',
        metaDescription: 'Professional online reputation management services. Brand monitoring, review management, crisis response, and reputation building strategies.',
        sections: {
            whyChoose: {
                title: 'Build Trust Through Reputation Excellence',
                content: 'Your online reputation directly impacts customer decisions, employee recruitment, and business partnerships. We help you take control of your digital narrative through continuous monitoring, strategic engagement, and proactive reputation building that protects and enhances your brand value.',
                points: [
                    '24/7 monitoring across all digital channels',
                    'Rapid response to negative content and reviews',
                    'Proactive strategies to build positive presence',
                    'Crisis management and damage control'
                ]
            },
            problem: {
                title: 'Is Negative Content Damaging Your Brand?',
                content: 'Negative reviews, unfavorable search results, and damaging social media content erode trust and cost you customers. Without active reputation management, false information and outdated content can dominate your online presence. We protect your brand through vigilant monitoring, strategic response protocols, and positive content strategies that ensure your reputation reflects your true value.'
            },
            differentiators: {
                title: 'Our Reputation Management Approach',
                points: [
                    {
                        title: 'Comprehensive Monitoring',
                        description: 'Track mentions across review sites, social media, news, and forums'
                    },
                    {
                        title: 'Strategic Response',
                        description: 'Professional handling of negative feedback and crisis situations'
                    },
                    {
                        title: 'Positive Amplification',
                        description: 'Generate and promote positive content that builds credibility'
                    },
                    {
                        title: 'Review Generation',
                        description: 'Systematic programs to increase positive customer reviews'
                    },
                    {
                        title: 'SEO Optimization',
                        description: 'Ensure positive content ranks prominently in search results'
                    }
                ]
            },
            framework: {
                title: 'Our Reputation Management Process',
                steps: [
                    {
                        title: 'Reputation Audit',
                        description: 'Comprehensive assessment of your current online reputation across all channels. Identify risks, opportunities, and priority areas.'
                    },
                    {
                        title: 'Monitoring Setup',
                        description: 'Implement tracking systems for mentions, reviews, and brand-related content. Establish alert protocols for immediate response needs.'
                    },
                    {
                        title: 'Response Strategy',
                        description: 'Develop guidelines for engaging with reviews and feedback. Create crisis response protocols and approval workflows.'
                    },
                    {
                        title: 'Positive Content Creation',
                        description: 'Generate authentic positive content including customer testimonials, case studies, and thought leadership to strengthen reputation.'
                    },
                    {
                        title: 'Ongoing Management',
                        description: 'Continuous monitoring, response, and optimization. Regular reporting on reputation metrics and sentiment trends.'
                    }
                ]
            },
            platforms: {
                title: 'Reputation Management Services',
                items: [
                    {
                        name: 'Review Management',
                        description: 'Monitor and respond to reviews on Google, Yelp, Trustpilot, and industry platforms'
                    },
                    {
                        name: 'Social Media Monitoring',
                        description: 'Track brand mentions and sentiment across social networks'
                    },
                    {
                        name: 'Crisis Management',
                        description: 'Rapid response protocols for reputation threats and negative incidents'
                    },
                    {
                        name: 'Content Suppression',
                        description: 'Strategic approaches to minimize visibility of negative content'
                    },
                    {
                        name: 'Brand Building',
                        description: 'Proactive campaigns to strengthen positive brand perception'
                    }
                ]
            },
            results: {
                title: 'Reputation Management Impact',
                outcomes: [
                    'Improved online ratings and review scores',
                    'Higher customer trust and confidence',
                    'Better search engine reputation results',
                    'Faster resolution of customer concerns',
                    'Protected brand value and equity'
                ]
            }
        },
        faqs: [
            {
                question: 'Can you remove negative content from the internet?',
                answer: 'While we cannot guarantee removal, we can request removal of false or defamatory content, suppress negative results through SEO, and work with platforms to address policy violations.'
            },
            {
                question: 'How quickly can you respond to reputation threats?',
                answer: 'Our monitoring systems provide real-time alerts, and we can respond to critical issues within hours. We establish response protocols tailored to your risk tolerance and industry requirements.'
            },
            {
                question: 'Do you generate fake positive reviews?',
                answer: 'Absolutely not. We only work with authentic customer feedback and follow all platform guidelines. Our review generation programs encourage genuine customers to share their experiences.'
            },
            {
                question: 'What platforms do you monitor?',
                answer: 'We monitor Google, major review sites (Yelp, Trustpilot, etc.), social media platforms, news sites, blogs, forums, and industry-specific platforms relevant to your business.'
            },
            {
                question: 'How do you measure reputation improvement?',
                answer: 'We track metrics including average review ratings, sentiment scores, search result positioning, mention volume, and share of voice compared to competitors.'
            }
        ]
    },
    {
        slug: 'ui-ux-design',
        title: 'UI/UX Design Services',
        shortTitle: 'UI / UX Design',
        icon: Palette,
        tagline: 'Designing Experiences That Users Love',
        heroDescription: 'We create intuitive, visually stunning interfaces that delight users and drive business results. Our design process combines user research, strategic thinking, and creative excellence to deliver digital experiences that are both beautiful and highly functional.',
        metaDescription: 'Professional UI/UX design services. User research, prototyping, visual design, and user experiences that drive engagement and conversions.',
        sections: {
            whyChoose: {
                title: 'Transform User Experience Into Competitive Advantage',
                content: 'Great design is invisible—it just works. We create interfaces that users intuitively understand and enjoy using. Our human-centered approach ensures every design decision is grounded in user needs while achieving your business objectives.',
                points: [
                    'User research and behavioral analysis',
                    'Iterative prototyping and testing',
                    'Pixel-perfect visual design',
                    'Accessibility and inclusive design'
                ]
            },
            problem: {
                title: 'Is Poor UX Costing You Customers?',
                content: 'Confusing navigation, cluttered interfaces, and frustrating user flows drive customers away. Poor design creates friction that reduces conversions and damages brand perception. We solve this through user-centered design that eliminates pain points, streamlines interactions, and creates delightful experiences that keep users engaged.'
            },
            differentiators: {
                title: 'Our Design Philosophy',
                points: [
                    {
                        title: 'User-Centered Approach',
                        description: 'Design decisions based on real user research and testing'
                    },
                    {
                        title: 'Strategic Thinking',
                        description: 'Balancing user needs with business objectives'
                    },
                    {
                        title: 'Visual Excellence',
                        description: 'Beautiful interfaces that reinforce brand identity'
                    },
                    {
                        title: 'Interaction Design',
                        description: 'Smooth, intuitive interactions that feel natural'
                    },
                    {
                        title: 'Accessibility First',
                        description: 'Inclusive design that works for all users'
                    }
                ]
            },
            framework: {
                title: 'Our Design Process',
                steps: [
                    {
                        title: 'Research & Discovery',
                        description: 'User interviews, competitive analysis, and stakeholder workshops. We understand user needs, pain points, and opportunities.'
                    },
                    {
                        title: 'Information Architecture',
                        description: 'Structure content and features logically. Create user flows and sitemaps that guide intuitive navigation.'
                    },
                    {
                        title: 'Wireframing & Prototyping',
                        description: 'Low-fidelity wireframes evolve into interactive prototypes. Test concepts early to validate design decisions.'
                    },
                    {
                        title: 'Visual Design',
                        description: 'Apply brand identity, create design systems, and craft pixel-perfect interfaces. Ensure consistency across all touchpoints.'
                    },
                    {
                        title: 'Testing & Iteration',
                        description: 'Usability testing with real users. Refine designs based on feedback and behavioral data.'
                    }
                ]
            },
            platforms: {
                title: 'Design Services',
                items: [
                    {
                        name: 'Web Application Design',
                        description: 'Complex SaaS platforms and enterprise applications'
                    },
                    {
                        name: 'Mobile App Design',
                        description: 'iOS and Android native and cross-platform apps'
                    },
                    {
                        name: 'Website Design',
                        description: 'Marketing sites, e-commerce, and corporate websites'
                    },
                    {
                        name: 'Design Systems',
                        description: 'Scalable component libraries and brand guidelines'
                    },
                    {
                        name: 'UX Audits',
                        description: 'Comprehensive evaluation and improvement recommendations'
                    }
                ]
            },
            results: {
                title: 'Design Impact',
                outcomes: [
                    'Higher user engagement and satisfaction',
                    'Increased conversion rates',
                    'Reduced support costs through intuitive design',
                    'Stronger brand perception',
                    'Faster user onboarding and adoption'
                ]
            }
        },
        faqs: [
            {
                question: 'What is the difference between UI and UX design?',
                answer: 'UX (User Experience) focuses on the overall user journey and how the product works. UI (User Interface) focuses on visual design and how the product looks. We provide both as integrated services.'
            },
            {
                question: 'Do you conduct user research?',
                answer: 'Yes, user research is a core part of our process. We conduct interviews, surveys, usability testing, and analytics analysis to inform design decisions.'
            },
            {
                question: 'Can you redesign an existing product?',
                answer: 'Absolutely. We specialize in redesigns that improve usability and visual appeal while maintaining familiarity for existing users.'
            },
            {
                question: 'Do you provide design files and assets?',
                answer: 'Yes, we deliver complete design files (Figma, Sketch, Adobe XD), design systems, style guides, and all necessary assets for development.'
            },
            {
                question: 'How long does a design project take?',
                answer: 'Timelines vary based on scope. Simple website designs may take 3-4 weeks, while complex applications can take 8-12 weeks or more.'
            }
        ]
    },
    {
        slug: 'performance-marketing',
        title: 'Performance Marketing Services',
        shortTitle: 'Performance Marketing',
        icon: TrendingUp,
        tagline: 'Data-Driven Campaigns That Maximize ROI',
        heroDescription: 'We deliver performance marketing campaigns optimized for measurable results. Our data-focused approach combines strategic targeting, compelling creative, and continuous optimization to drive conversions and maximize your return on ad spend.',
        metaDescription: 'Professional performance marketing services. Paid search, social ads, retargeting, and data-driven campaigns optimized for maximum ROI.',
        sections: {
            whyChoose: {
                title: 'Drive Measurable Growth With Performance Marketing',
                content: 'Performance marketing is about accountability and results. We focus on campaigns that deliver measurable outcomes—leads, sales, and revenue. Our approach combines strategic planning, creative excellence, and rigorous optimization to ensure every dollar works harder.',
                points: [
                    'Data-driven targeting and optimization',
                    'Multi-channel campaign management',
                    'Transparent reporting and analytics',
                    'Continuous testing and improvement'
                ]
            },
            problem: {
                title: 'Wasting Budget on Underperforming Ads?',
                content: 'Generic campaigns, poor targeting, and lack of optimization burn through budgets without delivering results. Without proper tracking and analysis, you can\'t identify what works or improve performance. We solve this through precise targeting, conversion-focused creative, and data-driven optimization that ensures your campaigns consistently deliver profitable results.'
            },
            differentiators: {
                title: 'Our Performance Marketing Advantage',
                points: [
                    {
                        title: 'ROI-Focused',
                        description: 'Every campaign optimized for maximum return on investment'
                    },
                    {
                        title: 'Advanced Targeting',
                        description: 'Reach the right audience with precision targeting strategies'
                    },
                    {
                        title: 'Creative Excellence',
                        description: 'Compelling ad creative that drives clicks and conversions'
                    },
                    {
                        title: 'Continuous Optimization',
                        description: 'Daily monitoring and refinement for better performance'
                    },
                    {
                        title: 'Full Funnel Strategy',
                        description: 'Integrated campaigns across awareness, consideration, and conversion'
                    }
                ]
            },
            framework: {
                title: 'Our Performance Marketing Process',
                steps: [
                    {
                        title: 'Strategy & Planning',
                        description: 'Define objectives, KPIs, and target audiences. Develop channel strategy and budget allocation based on business goals.'
                    },
                    {
                        title: 'Campaign Setup',
                        description: 'Build campaigns with proper tracking, audience targeting, and conversion optimization. Implement analytics and attribution models.'
                    },
                    {
                        title: 'Creative Development',
                        description: 'Design high-performing ad creative and landing pages. A/B test messaging, visuals, and offers.'
                    },
                    {
                        title: 'Launch & Optimization',
                        description: 'Launch campaigns and monitor performance closely. Optimize bids, targeting, and creative based on data.'
                    },
                    {
                        title: 'Scaling & Reporting',
                        description: 'Scale successful campaigns and pause underperformers. Provide transparent reporting on ROI and key metrics.'
                    }
                ]
            },
            platforms: {
                title: 'Performance Marketing Channels',
                items: [
                    {
                        name: 'Google Ads',
                        description: 'Search, Display, Shopping, and YouTube advertising'
                    },
                    {
                        name: 'Social Media Ads',
                        description: 'Facebook, Instagram, LinkedIn, TikTok, and Twitter campaigns'
                    },
                    {
                        name: 'Programmatic Display',
                        description: 'Automated ad buying across premium publisher networks'
                    },
                    {
                        name: 'Retargeting',
                        description: 'Re-engage website visitors and warm prospects'
                    },
                    {
                        name: 'Affiliate Marketing',
                        description: 'Performance-based partnerships and influencer collaborations'
                    }
                ]
            },
            results: {
                title: 'Performance Marketing Results',
                outcomes: [
                    'Lower cost per acquisition',
                    'Higher conversion rates',
                    'Improved return on ad spend (ROAS)',
                    'Scalable customer acquisition',
                    'Better attribution and insights'
                ]
            }
        },
        faqs: [
            {
                question: 'What is performance marketing?',
                answer: 'Performance marketing is advertising where you pay based on measurable actions (clicks, leads, sales) rather than impressions. It focuses on ROI and measurable outcomes.'
            },
            {
                question: 'What is a good ROAS (Return on Ad Spend)?',
                answer: 'Target ROAS varies by industry and business model. E-commerce typically aims for 4:1 or higher, while lead generation may target 3:1 depending on lifetime value.'
            },
            {
                question: 'How quickly can I see results?',
                answer: 'Initial results can appear within days, but optimal performance typically develops over 4-8 weeks as we gather data and optimize campaigns.'
            },
            {
                question: 'What budget do I need for performance marketing?',
                answer: 'Minimum budgets vary by channel and industry. We typically recommend starting with at least $3,000-5,000/month to gather meaningful data and achieve results.'
            },
            {
                question: 'Do you guarantee results?',
                answer: 'While we cannot guarantee specific outcomes, we focus on continuous optimization to improve performance. Our transparent reporting shows exactly what\'s working and what isn\'t.'
            }
        ]
    },
    {
        slug: 'seo-analytics',
        title: 'SEO & Analytics Services',
        shortTitle: 'SEO & Analytics',
        icon: BarChart,
        tagline: 'Driving Organic Growth Through Search Excellence',
        heroDescription: 'We improve your search engine visibility and transform data into actionable insights. Our comprehensive SEO and analytics services help you attract qualified organic traffic, understand user behavior, and optimize performance across all digital channels.',
        metaDescription: 'Professional SEO and analytics services. Keyword strategy, technical SEO, performance tracking, and data-driven insights for organic growth.',
        sections: {
            whyChoose: {
                title: 'Dominate Search Results and Make Data-Driven Decisions',
                content: 'Organic search is the most sustainable source of qualified traffic. We combine technical SEO expertise with advanced analytics to improve your search rankings and provide the insights needed to optimize your entire digital strategy.',
                points: [
                    'Comprehensive SEO audits and strategy',
                    'Technical optimization and site health',
                    'Content strategy and keyword research',
                    'Advanced analytics and reporting'
                ]
            },
            problem: {
                title: 'Invisible in Search Results?',
                content: 'Poor search rankings mean missed opportunities and lost revenue. Without proper analytics, you\'re flying blind—unable to understand what drives results or where to invest. We solve this through strategic SEO that improves visibility and comprehensive analytics that reveal exactly how users interact with your digital properties.'
            },
            differentiators: {
                title: 'Our SEO & Analytics Approach',
                points: [
                    {
                        title: 'Technical Excellence',
                        description: 'Deep technical SEO expertise for sustainable rankings'
                    },
                    {
                        title: 'Content Strategy',
                        description: 'Keyword research and content planning that drives traffic'
                    },
                    {
                        title: 'Advanced Analytics',
                        description: 'Custom dashboards and insights beyond basic metrics'
                    },
                    {
                        title: 'Competitive Intelligence',
                        description: 'Monitor competitors and identify opportunities'
                    },
                    {
                        title: 'Continuous Optimization',
                        description: 'Ongoing refinement based on performance data'
                    }
                ]
            },
            framework: {
                title: 'Our SEO & Analytics Process',
                steps: [
                    {
                        title: 'Audit & Analysis',
                        description: 'Comprehensive SEO audit covering technical, on-page, and off-page factors. Analytics review to understand current performance and opportunities.'
                    },
                    {
                        title: 'Strategy Development',
                        description: 'Keyword research, competitive analysis, and content gap identification. Define SEO roadmap and measurement framework.'
                    },
                    {
                        title: 'Technical Optimization',
                        description: 'Fix technical issues, improve site speed, enhance mobile experience, and implement structured data.'
                    },
                    {
                        title: 'Content & On-Page',
                        description: 'Optimize existing content and create new SEO-focused content. Improve internal linking and page structure.'
                    },
                    {
                        title: 'Monitoring & Reporting',
                        description: 'Track rankings, traffic, and conversions. Provide actionable insights and continuous optimization recommendations.'
                    }
                ]
            },
            platforms: {
                title: 'SEO & Analytics Services',
                items: [
                    {
                        name: 'Technical SEO',
                        description: 'Site speed, mobile optimization, crawlability, and indexation'
                    },
                    {
                        name: 'On-Page SEO',
                        description: 'Content optimization, keyword targeting, and internal linking'
                    },
                    {
                        name: 'Off-Page SEO',
                        description: 'Link building, brand mentions, and authority development'
                    },
                    {
                        name: 'Local SEO',
                        description: 'Google Business Profile optimization and local search visibility'
                    },
                    {
                        name: 'Analytics & Reporting',
                        description: 'Custom dashboards, conversion tracking, and performance insights'
                    }
                ]
            },
            results: {
                title: 'SEO & Analytics Impact',
                outcomes: [
                    'Higher organic search rankings',
                    'Increased qualified organic traffic',
                    'Better understanding of user behavior',
                    'Improved conversion rates',
                    'Data-driven decision making'
                ]
            }
        },
        faqs: [
            {
                question: 'How long does SEO take to show results?',
                answer: 'SEO is a long-term strategy. Initial improvements may appear in 3-4 months, with significant results typically visible in 6-12 months depending on competition and current state.'
            },
            {
                question: 'Do you guarantee first page rankings?',
                answer: 'We cannot guarantee specific rankings as search algorithms constantly evolve. We focus on sustainable, white-hat strategies that improve visibility and drive qualified traffic.'
            },
            {
                question: 'What analytics platforms do you use?',
                answer: 'We work with Google Analytics 4, Google Search Console, Adobe Analytics, and other platforms. We also create custom dashboards for comprehensive reporting.'
            },
            {
                question: 'Can you help with local SEO?',
                answer: 'Yes, we optimize Google Business Profiles, local citations, and location-specific content to improve visibility in local search results.'
            },
            {
                question: 'What is included in an SEO audit?',
                answer: 'Our audits cover technical SEO, on-page optimization, content analysis, backlink profile, site speed, mobile usability, and competitive benchmarking with actionable recommendations.'
            }
        ]
    }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
    return servicesData.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
    return servicesData.map(service => service.slug);
}
