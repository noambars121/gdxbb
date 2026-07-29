import { Nav } from '@/components/blocks/Nav';
import { HeroBlock } from '@/components/blocks/HeroBlock';
import { ProblemBlock } from '@/components/blocks/ProblemBlock';
import { ProofBlock } from '@/components/blocks/ProofBlock';
import { SystemBlock } from '@/components/blocks/SystemBlock';
import { ProcessBlock } from '@/components/blocks/ProcessBlock';
import { CTABlock } from '@/components/blocks/CTABlock';
import { Footer } from '@/components/blocks/Footer';

export default function HomePage() {
  return (
    <main dir="rtl" lang="he">
      <Nav />
      <HeroBlock />
      <ProblemBlock />
      <ProofBlock />
      <SystemBlock />
      <ProcessBlock />
      <CTABlock />
      <Footer />
    </main>
  );
}
