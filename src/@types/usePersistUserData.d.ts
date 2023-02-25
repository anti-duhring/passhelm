type TUsePersistSet = (dataName: string, dataObject: any) => Promise<{ success: true } | { error: any }>

type TUsePersistSetAll = (dataArray: TUsePersistParams[]) => Promise<unknown[]>

type TUsePersistGet = (dataName: string) => Promise<any>

type TUsePersistParams = {
    name: string,
    object: any
}
