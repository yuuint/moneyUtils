export class MomeyUtils {
  public static toJpString(mount: number) {
    return new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
    }).format(mount);
  }
}
