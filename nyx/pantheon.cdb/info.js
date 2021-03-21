var info =
{
  "type": "simple",
  "version": "1.1",
  "metadata": 
  {
    "type": "parametric-image-stack"
  },
  "name_pattern": "{time}/{phi}_{theta}_pantheon.cdb.png",
  "arguments": 
  {
    "time": 
    {
      "default": "0.0",
      "label": "time",
      "type": "range",
      "values": 
      [
        "0.0",
        "1.0",
        "2.0"
      ]
    },
    "phi": 
    {
      "default": "-180.0",
      "label": "phi",
      "type": "range",
      "values": 
      [
        "-180.0",
        "-144.0",
        "-108.0",
        "-72.0",
        "-36.0",
        "0.0",
        "36.0",
        "72.0",
        "108.0",
        "144.0"
      ]
    },
    "theta": 
    {
      "default": "0.0",
      "label": "theta",
      "type": "range",
      "values": 
      [
        "0.0",
        "45.0",
        "90.0",
        "135.0"
      ]
    }
  }
}