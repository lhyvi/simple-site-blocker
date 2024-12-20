import os

if __name__ == '__main__':
    image_list = f"const images = {str([x for x in os.listdir('./images') if x.endswith(('.png' , '.jpeg' , '.jpg' , '.gif' , '.webp'))])};"
    with open("images.js", "w") as image_file:
        image_file.write(image_list);