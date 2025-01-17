import withPlaiceholder from '@plaiceholder/next';

/** @type {import('next').NextConfig} */

const nextConfig = {
    images : {
        domains : ['localhost', 'playbook-quiz.vercel.app']
    }
};

export default withPlaiceholder(nextConfig);
