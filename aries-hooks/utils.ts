async function downloadString(url: string): Promise<string> {
  const response = await fetch(url)
  const string = await response.text()

  return string
}

export { downloadString }
