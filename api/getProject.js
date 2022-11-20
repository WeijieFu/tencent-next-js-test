const getProjects = async () => {
  try {
    const res = await fetch(
      `https://tencent-next-js-test-0bze5999092-1305648431.ap-shanghai.service.tcloudbase.com/api/v1.0/project`
    )
    console.log(res)
    const awards = await res.json()
    return awards.data
  } catch (err) {
    console.log(err)
  }
}

export default getProjects
