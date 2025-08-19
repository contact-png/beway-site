type TransitionBandProps = {
  from?: string;
  to?: string;
  height?: number;
  invert?: boolean;
};

export default function TransitionBand({
  from = '#FFFFFF',
  to = '#F6FAFF',
  height = 96,
  invert = false,
}: TransitionBandProps) {
  const direction = invert ? 'to top' : 'to bottom';
  const gradient = `linear-gradient(${direction}, ${from}, ${to})`;

  return (
    <div
      aria-hidden="true"
      className="w-full pointer-events-none"
      style={{ height, background: gradient }}
    />
  );
}
