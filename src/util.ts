export namespace Util {
	export const isDefined = <T>(x: T | undefined): x is T => {
		return x !== undefined
	}
}
