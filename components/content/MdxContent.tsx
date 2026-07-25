import { MDXRemote } from "next-mdx-remote/rsc";

type MdxContentProps = {
  source: string;
};

/** Minimal MDX renderer for publication bodies. */
export function MdxContent({ source }: MdxContentProps) {
  return (
    <div className="stack max-w-2xl text-base leading-relaxed">
      <MDXRemote source={source} />
    </div>
  );
}
