export const generateTotalRating = (
  positiveCount: number,
  negativeCount: number
): number => {
  const totalRatings: number = positiveCount + negativeCount;

  if (totalRatings === 0) {
    return 0;
  }

  const positiveWeight: number = positiveCount / totalRatings;
  const negativeWeight: number = negativeCount / totalRatings;

  const positiveRating: number = positiveWeight * 5;
  const negativeRating: number = negativeWeight * 5;

  const totalRating: number = (positiveRating - negativeRating) / 2 + 2.5;

  return Number(totalRating.toFixed(1));
};
